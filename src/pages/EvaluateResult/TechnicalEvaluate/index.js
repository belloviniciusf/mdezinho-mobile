import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
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
  ContainerMessage,
  ContainerEvaluate,
  ImageEvaluate,
  OptionsList,
  Title,
  Label,
  SubmitButton,
} from './styles';

export default function GeneralEvaluate({navigation}) {
  const tvShow = navigation.getParam('tvShow');
  const user = navigation.getParam('user');
  const [evaluation, setEvaluation] = useState([]);

  function handlePress() {
    navigation.navigate('Comments', {tvShow, getComment: true, user});
  }

  async function loadEvaluationAnswers() {
    try {
      const params = user ? {userId: user.userId} : {};
      const response = await api.get(`evaluations/${tvShow._id}/technicals`, {
        params,
      });

      response.data.map(function (data) {
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
    loadEvaluationAnswers();
  }, []);

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <Title>
            {tvShow.name} - {tvShow.date} - {tvShow.broadcaster}
          </Title>
          <OptionsList
            style={{flexGrow: 0, flex: 1}}
            data={evaluation}
            keyExtractor={(option) => String(option.label)}
            renderItem={({item: e}) => (
              <ContainerEvaluate>
                <Label>{e.label}</Label>
                <ImageEvaluate source={e.source} />
              </ContainerEvaluate>
            )}
          />
          <SubmitButton name="arrow-forward" size={30} onPress={handlePress}>
            Comentários
          </SubmitButton>
        </ContainerMessage>
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
  title: 'Avaliação técnica',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          navigation.getParam('user') !== {} ? 'GeneralEvaluate' : 'Dashboard',
          {
            tvShow: navigation.getParam('tvShow'),
            user: navigation.getParam('user'),
          },
        );
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
