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
  Note,
  ImageEvaluate,
  Title,
  Label,
  SubmitButton,
} from './styles';

export default function GeneralEvaluate({navigation}) {
  const tvShow = navigation.getParam('tvShow');
  const [evaluation, setEvaluation] = useState({});

  function handlePress(view) {
    navigation.navigate(view, {tvShow});
  }

  async function loadAverageEvaluation() {
    try {
      const response = await api.get(`evaluations/${tvShow._id}/average`);

      const {data} = response;

      if (data) {
        switch (true) {
          case data.average >= 0 && data.average < 1.3:
            data.source = PessimoPng;
            data.label = 'Péssimo';
            break;
          case data.average > 1.4 && data.average < 2.3:
            data.source = RuimPng;
            data.label = 'Ruim';
            break;
          case data.average > 2.4 && data.average < 3.3:
            data.source = RegularPng;
            data.label = 'Regular';
            break;
          case data.average > 3.4 && data.average < 4.3:
            data.source = BomPng;
            data.label = 'Bom';
            break;
          case data.average > 4.4 && data.average < 5:
            data.source = OtimoPng;
            data.label = 'Ótimo';
            break;
          default:
            data.source = RuimPng;
            data.label = 'Ruim';
        }
      }

      setEvaluation(data);
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao obter o resultado desse programa, tente novamente!',
      );
    }
  }

  useEffect(() => {
    loadAverageEvaluation();
  }, []);

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <Title>{tvShow.name}</Title>
          {evaluation && evaluation.total && evaluation.total > 0 ? (
            <>
              <Label>Número de avaliações realizadas: {evaluation.total}</Label>
              <Label>Média das avaliações:</Label>
              <ImageEvaluate source={evaluation.source} />
              <Note>{evaluation.label}</Note>
            </>
          ) : (
            <Label>Ainda não tivemos respostas para este programa.</Label>
          )}
        </ContainerMessage>
        {evaluation && evaluation.total > 0 ? (
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
                handlePress('Evaluators');
              }}>
              Avaliação de percepção
            </SubmitButton>
          </ContainerButtons>
        ) : (
          <></>
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
  title: 'Média de avaliação geral',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Programs');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
