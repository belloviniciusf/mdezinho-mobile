import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Background from '../../../components/Background';
import IconButton from '../../../components/IconButton';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import {Container, ContainerMessage} from './styles';

export default function Doubts({navigation}) {
  function handlePress(view) {
    navigation.navigate('ManualInformation', {tutorial: view, view: 'Doubts'});
  }

  return (
    <Background>
      <Container>
        <ContainerMessage>
          <IconButton
            onPress={() => {
              handlePress('DuvidaAplicativo');
            }}
            name="settings">
            Para que serve o aplicativo?
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('DuvidaCC');
            }}
            name="subtitles">
            Onde aciona o CC na TV?
          </IconButton>
          <IconButton
            onPress={() => {
              handlePress('DuvidaEmoji');
            }}
            name="insert-emoticon">
            Que nota corresponde cada emoticon?
          </IconButton>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Doubts.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Doubts.navigationOptions = ({navigation}) => ({
  title: 'Dúvidas frequentes',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Operation');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
