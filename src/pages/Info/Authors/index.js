import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import UfgdLogo from '../../../assets/ufgd-logo.png';
import GepeticLogo from '../../../assets/gepetic.png';
import Gif from '../../../assets/P1.gif';
import {
  Container,
  ContainerMessage,
  ContainerLogos,
  CentralImage,
  Title,
  SubImage,
} from './styles';

export default function Authors({navigation}) {
  const language = useSelector((state) => state.user.language);

  return (
    <Background>
      <Container>
        {language === 'libras' && <CentralImage source={Gif} />}
        <ContainerMessage>
          <Title>
            Este aplicativo foi elaborado, desenvolvido e testado em pesquisa
            pela Universidade Federal da Grande Dourados (UFGD), tendo sua
            concepção, método e layout associados a direito de autor de Mariana
            Dézinho e Reinaldo dos Santos.
          </Title>
          <Title>Endereço para contato: gepetic@ufgd.edu.br</Title>
        </ContainerMessage>
        <ContainerLogos>
          <SubImage source={GepeticLogo} />
          <SubImage source={UfgdLogo} />
        </ContainerLogos>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Authors.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Authors.navigationOptions = ({navigation}) => ({
  title: 'Autoria e equipe',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('LegalInformations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
