import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import Background from '../../../components/Background';
import IconButton from '../../../components/IconButton';
import {Container, ContainerMessage} from './styles';

export default function Tutorial({navigation}) {
  function handlePress(view) {
    navigation.navigate('ManualInformation', {
      tutorial: view,
      view: 'Tutorial',
    });
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <IconButton
            onPress={() => {
              handlePress('Busca');
            }}
            name="search">
            Realizando busca
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('Avaliação');
            }}
            name="grade">
            Como fazer avaliação
          </IconButton>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Tutorial.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Tutorial.navigationOptions = ({navigation}) => ({
  title: 'Tutoriais',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Operation');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
