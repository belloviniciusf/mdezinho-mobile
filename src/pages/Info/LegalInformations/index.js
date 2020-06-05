import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import IconButton from '../../../components/IconButton';
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
              handlePress('Authors');
            }}
            name="supervisor-account">
            Autoria e equipe
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Copyright');
            }}
            name="fingerprint">
            Direitos autorais
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Product');
            }}
            name="settings">
            Produto
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
  title: 'Informações legais',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Informations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
