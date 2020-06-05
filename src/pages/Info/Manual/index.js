import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import IconButton from '../../../components/IconButton';
import Navbar from '../../../components/Navbar';
import {Container, ContainerMessage} from './styles';

export default function Manual({navigation}) {
  function handlePress(tutorial) {
    navigation.navigate('ManualInformation', {tutorial, view: 'Manual'});
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <IconButton
            onPress={() => {
              handlePress('Aplicativo');
            }}
            name="settings">
            Aplicativo
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Buscar');
            }}
            name="search">
            Buscar
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Avaliar');
            }}
            name="stars">
            Avaliação
          </IconButton>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Manual.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Manual.navigationOptions = ({navigation}) => ({
  title: 'Manuais',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Operation');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
