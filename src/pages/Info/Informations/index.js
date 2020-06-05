import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Background from '../../../components/Background';
import IconButton from '../../../components/IconButton';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import {Container, ContainerMessage} from './styles';

export default function Informations({navigation}) {
  function handlePress(view) {
    navigation.navigate(view);
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <IconButton
            onPress={() => {
              handlePress('LegalInformations');
            }}
            name="description">
            Informações legais
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Operation');
            }}
            name="settings">
            Funcionamento
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Comment');
            }}
            name="chat">
            Fale conosco
          </IconButton>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Informations.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Informations.navigationOptions = ({navigation}) => ({
  title: 'Informações',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MainMenu');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
