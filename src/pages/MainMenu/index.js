import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../components/Background';
import IconButton from '../../components/IconButton';
import {Container, ContainerButtons, ContainerMessage, Button} from './styles';

export default function MainMenu({navigation}) {
  function handlePress(view) {
    navigation.navigate(view);
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <ContainerButtons>
            <Button
              onPress={() => {
                handlePress('Programs');
              }}
              name="search">
              Buscar
            </Button>
            <Button
              onPress={() => {
                handlePress('Profile');
              }}
              name="person">
              Perfil
            </Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button
              onPress={() => {
                handlePress('Informations');
              }}
              name="info">
              Informações
            </Button>
            <Button
              onPress={() => {
                handlePress('Dashboard');
              }}
              name="grade">
              Avaliar
            </Button>
          </ContainerButtons>
        </ContainerMessage>
      </Container>
    </Background>
  );
}

MainMenu.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

MainMenu.navigationOptions = ({navigation}) => ({
  title: 'Menu principal',
});
