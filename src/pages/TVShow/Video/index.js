import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import PropTypes from 'prop-types';
import Navbar from '../../../components/Navbar';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import {Container, SubmitButton} from './styles';

export default function Video({navigation}) {
  const tvShow = navigation.getParam('tvShow');

  function handlePress() {
    navigation.navigate('Attention', {tvShow});
  }

  return (
    <Background>
      <Container>
        <SubmitButton
          name="movie"
          onPress={() => {
            Linking.openURL(tvShow.videoRef);
          }}>
          Clique para assistir {tvShow.name}
        </SubmitButton>
        <SubmitButton size={30} name="arrow-forward" onPress={handlePress}>
          Próximo
        </SubmitButton>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Video.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Video.navigationOptions = ({navigation}) => ({
  title: 'Vídeo',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
