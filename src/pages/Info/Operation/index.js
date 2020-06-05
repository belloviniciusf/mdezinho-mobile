import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import IconButton from '../../../components/IconButton';
import Navbar from '../../../components/Navbar';
import {Container, ContainerMessage} from './styles';

export default function Operation({navigation}) {
  function handlePress(view) {
    navigation.navigate(view);
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <IconButton
            onPress={() => {
              handlePress('Manual');
            }}
            name="insert-chart">
            Manuais
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Tutorial');
            }}
            name="video-library">
            Tutoriais
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Doubts');
            }}
            name="info">
            Dúvidas frequentes
          </IconButton>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Operation.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Operation.navigationOptions = ({navigation}) => ({
  title: 'Funcionamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Informations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
