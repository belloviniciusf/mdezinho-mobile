import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button} from './styles';

export default function Navbar({navigation}) {
  function handlePress(view) {
    navigation.navigate(view);
  }

  return (
    <Container>
      <Button
        name="search"
        size={30}
        onPress={() => {
          handlePress('Programs');
        }}>
        Buscar
      </Button>
      <Button
        name="star"
        size={30}
        onPress={() => {
          handlePress('Dashboard');
        }}>
        Avaliar
      </Button>
      <Button
        name="info"
        size={30}
        onPress={() => {
          handlePress('Informations');
        }}>
        Info
      </Button>
      <Button
        name="person"
        size={30}
        onPress={() => {
          handlePress('Profile');
        }}>
        Perfil
      </Button>
    </Container>
  );
}

Navbar.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
