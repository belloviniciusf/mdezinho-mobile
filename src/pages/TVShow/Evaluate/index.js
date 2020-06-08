import {
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import api from '../../../services/api';
import gifs from '../../../assets/gifs';
import BomPng from '../../../assets/icons/bom.png';
import OtimoPng from '../../../assets/icons/otimo.png';
import PessimoPng from '../../../assets/icons/pessimo.png';
import RegularPng from '../../../assets/icons/regular.png';
import RuimPng from '../../../assets/icons/ruim.png';
import VazioPng from '../../../assets/icons/vazio.png';
import Background from '../../../components/Background';
import {
  Container,
  ContainerEvaluation,
  ContainerTitle,
  ContainerButtons,
  Title,
  OptionsList,
  Option,
  Avatar,
  Name,
  CentralImage,
  SubmitButton,
  EndButton,
  Border,
} from './styles';

export default function Evaluate({navigation}) {
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const language = useSelector((state) => state.user.language);
  const tvShow = navigation.getParam('tvShow');
  const icons = [OtimoPng, BomPng, RegularPng, RuimPng, PessimoPng, VazioPng];

  async function loadQuestions() {
    const response = await api.get(`questions/tvshows/${tvShow._id}`);

    setQuestions(response.data);
    setLoading(false);
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && questions[indexQuestion].type === 3) {
      navigation.navigate('Comments', {
        question: questions[indexQuestion],
        tvShow,
      });
    }
  }, [questions, indexQuestion]);

  function handleOptionSelected(option) {
    const actualQuestion = questions[indexQuestion];

    setOptionSelected({
      questionId: actualQuestion._id,
      tvShowId: tvShow._id,
      value: option.value,
    });
  }

  async function createNotAnswered() {
    const actualQuestion = questions[indexQuestion];

    const data = {
      questionId: actualQuestion._id,
      tvShowId: tvShow._id,
      value: 0,
      notAnswered: true,
    };

    try {
      await api.post('answers', data);
      setOptionSelected({});

      setIndexQuestion(indexQuestion + 1);
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao gravar sua avaliação, tente novamente!',
      );
    }
  }

  async function createAnswer(endEvaluation) {
    try {
      if (!optionSelected.questionId) {
        return Alert.alert(
          'Ops!',
          'É necessário escolher uma opção para responder.',
        );
      }

      await api.post('answers', {...optionSelected, last: endEvaluation});
      if (endEvaluation) {
        navigation.navigate('GeneralEvaluate', {tvShow});
      } else {
        setOptionSelected({});

        setIndexQuestion(indexQuestion + 1);
      }
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao gravar sua avaliação, tente novamente!',
      );
    }
  }

  return (
    <Background>
      <Container>
        {questions.length > 0 && language === 'libras' && (
          <CentralImage
            source={
              gifs.find((gif) => gif.name === questions[indexQuestion].videoRef)
                .source
            }
          />
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          questions.length > 0 && (
            <ContainerEvaluation>
              <ContainerTitle>
                <Title>{questions[indexQuestion].name}</Title>
              </ContainerTitle>
              <OptionsList
                style={{flexGrow: 0, flex: 1, minHeight: 200}}
                data={questions[indexQuestion].options}
                keyExtractor={(option) => String(option.value)}
                renderItem={({item: option}) => (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      handleOptionSelected(option);
                    }}>
                    <Border isSelected={optionSelected.value === option.value}>
                      <Avatar source={icons[5 - option.value]} />
                      <Name numberOfLines={2}>{option.label}</Name>
                    </Border>
                  </TouchableWithoutFeedback>
                )}
              />
              <ContainerButtons>
                <SubmitButton onPress={createNotAnswered}>
                  Não responder
                </SubmitButton>
                <SubmitButton onPress={createAnswer}>
                  Próxima pergunta
                </SubmitButton>
              </ContainerButtons>
              {questions[indexQuestion].last && (
                <EndButton
                  onPress={() => {
                    createAnswer(true);
                  }}>
                  Encerrar avaliação
                </EndButton>
              )}
            </ContainerEvaluation>
          )
        )}
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Evaluate.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Evaluate.navigationOptions = ({navigation}) => ({
  title: 'Avaliação',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
