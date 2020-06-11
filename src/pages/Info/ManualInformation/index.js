import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import Navbar from '../../../components/Navbar';
import {
  Container,
  ContainerMessage,
  Title,
  Label,
  CentralImage,
} from './styles';

const informations = [
  {
    manual: 'Aplicativo',
    title: 'Aplicativo',
    messages: [
      'O Aplicativo para Estudos e Avaliação de Legendas (APP-EAL) tem o objetivo de auxiliar na avaliação e fiscalização das legendas CC na TV aberta, dando oportunidade do usuário visualizar avaliações já feitas por outras pessoas e também realizar avaliações das legendas dos programas que desejar.',
    ],
  },
  {
    manual: 'Buscar',
    title: 'Buscar',
    messages: [
      'Nesta opção o usuário poderá acessar as fichas de avaliação de legendas de outros usuários. Os resultados aparecem em 4 formatos diferentes:',
      'A avaliação geral: média das avaliações realizadas;',
      'A avaliação parcial: conta com as observações feitas pelo usuário na categoria percepção/satisfação e a média da avaliação técnica;',
      'A avaliação técnica: detalhamento dos quesitos;',
      'Comentários: relatos deixados pelos usuários.',
    ],
  },
  {
    manual: 'Avaliar',
    title: 'Avaliar',
    messages: [
      'No APP-EAL existem 3 tipos de avaliações:',
      'A avaliação de percepção/satisfação composta por duas perguntas de cunho pessoal.',
      'A avaliação técnica formada por 12 questões sobre as diretrizes que compõem a legenda.',
      'E por fim temos os comentários odne os usuários descrevem os aspectos positivos e negativos da legenda que avaliou.',
    ],
  },
  {
    manual: 'DuvidaAplicativo',
    title: 'Para que serve o aplicativo?',
    messages: [
      'O aplicativo serve para buscar avaliações de legendas já realizadas por outros usuários e também para que você possa avaliar as legendas dos programas que desejar da TV aberta.',
    ],
  },
  {
    manual: 'DuvidaCC',
    title: 'Onde aciona o CC na televisão?',
    messages: [
      'Existem duas formas para ativar a legenda CC:',
      'No próprio controle remoto apertando o botão CC.',
      'Caso o controle não tenha este botão acesse:',
      'Configurações -> Sistemas -> Acessibilidade -> Legendas',
    ],
  },
  {
    manual: 'DuvidaEmoji',
    title: 'Que nota corresponde cada emoji?',
    messages: [
      'As notas da legenda são divididas em 5 conceitos:',
      'Péssimo (vermelho)',
      'Ruim (laranja)',
      'Regular (amarelo)',
      'Bom (verde)',
      'Ótimo (azul)',
    ],
  },
  {
    manual: 'Busca',
    title: 'Busca',
    gif: require('../../../assets/gifs/TutorialBuscar.gif'),
  },
  {
    manual: 'Avaliação',
    title: 'Avaliação',
    gif: require('../../../assets/gifs/TutorialAvaliar.gif'),
  },
];

export default function ManualInformation({navigation}) {
  const tutorial = navigation.getParam('tutorial');
  const manualObj = informations.find((x) => x.manual === tutorial);

  return (
    <Background>
      <Container>
        <ContainerMessage>
          {!manualObj.gif && <Title>{manualObj.title}</Title>}
          {manualObj.messages &&
            manualObj.messages.map((message) => (
              <Label key={message}>{message}</Label>
            ))}
          {manualObj.gif && <CentralImage source={manualObj.gif} />}
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

ManualInformation.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

ManualInformation.navigationOptions = ({navigation}) => ({
  title: informations.find((x) => x.manual === navigation.getParam('tutorial'))
    .title,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigation.getParam('view'));
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
