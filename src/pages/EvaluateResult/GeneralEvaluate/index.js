import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import api from '../../../services/api';
import BomPng from '../../../assets/icons/bom.png';
import OtimoPng from '../../../assets/icons/otimo.png';
import PessimoPng from '../../../assets/icons/pessimo.png';
import RegularPng from '../../../assets/icons/regular.png';
import RuimPng from '../../../assets/icons/ruim.png';
import {
  Container,
  ContainerButtons,
  ContainerMessage,
  ContainerEvaluate,
  ImageEvaluate,
  Title,
  Label,
  SubmitButton,
} from './styles';

export default function GeneralEvaluate({navigation}) {
  const tvShow = navigation.getParam('tvShow');
  const user = navigation.getParam('user');

  const [evaluation, setEvaluation] = useState({});

  function handlePress(view) {
    navigation.navigate(view, {tvShow, user});
  }

  async function loadEvaluation() {
    try {
      const params = user ? {userId: user.userId} : {};

      const response = await api.get(`evaluations/${tvShow._id}`, {
        params,
      });

      response.data.values.map(function (data) {
        switch (true) {
          case data.value >= 0 && data.value <= 1.3:
            data.source = PessimoPng;
            break;
          case data.value >= 1.4 && data.value <= 2.3:
            data.source = RuimPng;
            break;
          case data.value >= 2.4 && data.value <= 3.3:
            data.source = RegularPng;
            break;
          case data.value >= 3.4 && data.value <= 4.3:
            data.source = BomPng;
            break;
          case data.value >= 4.4 && data.value <= 5:
            data.source = OtimoPng;
            break;
          default:
            data.source = RuimPng;
        }
      });

      setEvaluation(response.data);
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao obter o resultado desse programa, tente novamente!',
      );
    }
  }

  useEffect(() => {
    loadEvaluation();
  }, []);

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <Title>
            {tvShow.name} - {tvShow.date} - {tvShow.broadcaster}
          </Title>
          {evaluation && evaluation.insufficientAnswers && (
            <Label>
              Não foi possível calcular a média geral da sua avaliação pois
              muitas perguntas ficaram sem resposta.
            </Label>
          )}
          {evaluation &&
            evaluation.values &&
            !evaluation.insufficientAnswers &&
            evaluation.values.map((e) => (
              <ContainerEvaluate key={e.label}>
                <Label>{e.label}</Label>
                <ImageEvaluate source={e.source} />
              </ContainerEvaluate>
            ))}
        </ContainerMessage>
        {evaluation &&
          evaluation.values &&
          evaluation.values.length > 3 &&
          !evaluation.insufficientAnswers && (
            <ContainerButtons>
              <SubmitButton
                fontsize="16px"
                name="menu"
                size={30}
                onPress={() => {
                  handlePress('MainMenu');
                }}>
                Menu principal
              </SubmitButton>
              <SubmitButton
                fontsize="16px"
                name="arrow-forward"
                size={30}
                onPress={() => {
                  handlePress('TechnicalEvaluate');
                }}>
                Avaliação técnica detalhada
              </SubmitButton>
            </ContainerButtons>
          )}
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

GeneralEvaluate.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

GeneralEvaluate.navigationOptions = ({navigation}) => ({
  title: 'Avaliação geral',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          navigation.getParam('user') !== undefined
            ? 'Evaluators'
            : 'Dashboard',
          {tvShow: navigation.getParam('tvShow')},
        );
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
