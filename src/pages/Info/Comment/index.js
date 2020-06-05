import {Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import Navbar from '../../../components/Navbar';
import api from '../../../services/api';
import {Container, CommentInput, SubmitButton} from './styles';

export default function Comment({navigation}) {
  const [comment, setComment] = useState('');

  async function createAnswer() {
    try {
      if (comment === '')
        return Alert.alert(
          'Ops!',
          'É necessário escrever algo para enviar a mensagem.',
        );

      const data = {
        text: comment,
      };

      await api.post('comments', data);

      Alert.alert('Eba!', 'Muito obrigado pelo feedback!');

      navigation.navigate('Informations');
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao gravar sua mensagem, tente novamente!',
      );
    }
  }

  return (
    <Background>
      <Container>
        <CommentInput
          multiline
          numberOfLines={6}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Envie dúvidas, sugestões e considerações sobre o aplicativo."
          value={comment}
          onChangeText={setComment}
          returnKeyType="next"
        />
        <SubmitButton onPress={createAnswer}>Enviar mensagem</SubmitButton>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Comment.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Comment.navigationOptions = ({navigation}) => ({
  title: 'Fale conosco',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Informations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
