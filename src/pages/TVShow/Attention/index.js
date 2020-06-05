import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import Gif from '../../../assets/P1.gif';
import Background from '../../../components/Background';
import {
  Container,
  ContainerMessage,
  Label,
  CentralImage,
  SubmitButton,
} from './styles';

export default function Attention({navigation}) {
  const tvShow = navigation.getParam('tvShow');
  const language = useSelector((state) => state.user.language);

  function handlePress() {
    navigation.navigate('Evaluate', {tvShow});
  }

  return (
    <Background>
      <Container>
        {language === 'libras' && <CentralImage source={Gif} />}
        <ContainerMessage>
          <Label>
            Agora que você assistiu o vídeo quantas vezes foi necessário, pode
            dar início as avaliações
          </Label>
        </ContainerMessage>
        <SubmitButton size={30} name="arrow-forward" onPress={handlePress}>
          Iniciar avaliações
        </SubmitButton>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Attention.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Attention.navigationOptions = ({navigation}) => ({
  title: 'Atenção',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Video');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
