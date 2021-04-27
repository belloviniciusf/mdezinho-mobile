import {Alert, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import CommentsGif from '../../../assets/gifs/Comentarios.gif';
import Background from '../../../components/Background';
import api from '../../../services/api';
import {
  Container,
  ContainerTitle,
  Title,
  Form,
  CommentInput,
  CentralImage,
  SubmitButton,
} from './styles';

export default function Comments({navigation}) {
  const [positiveComment, setPositiveComment] = useState('');
  const [negativeComment, setNegativeComment] = useState('');
  const question = navigation.getParam('question');
  const tvShow = navigation.getParam('tvShow');
  const user = navigation.getParam('user');
  const isVisualization = navigation.getParam('getComment');
  const language = useSelector((state) => state.user.language);

  async function createAnswer() {
    try {
      const data = {
        questionId: question._id,
        tvShow,
        positiveComment,
        negativeComment,
      };

      navigation.navigate('ConfirmComment', {data});
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao gravar sua avaliação, tente novamente!',
      );
    }
  }

  function handlePress() {
    navigation.navigate(user ? 'Programs' : 'MainMenu');
  }

  async function loadComments() {
    try {
      const params = user ? {userId: user.userId} : {};

      const response = await api.get(`evaluations/${tvShow._id}/comments`, {
        params,
      });

      setNegativeComment(response.data.negativeComment);
      setPositiveComment(response.data.positiveComment);
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao carregar os comentários, tente novamente!',
      );
    }
  }

  if (isVisualization) {
    loadComments();
  }

  return (
    <Background>
      <Container>
        <Form>
          {!isVisualization && language === 'libras' && (
            <CentralImage source={CommentsGif} />
          )}
          <ContainerTitle positive>
            <Icon name="thumb-up" size={30} color="#fff" />
            <Title>Destaques positivos</Title>
          </ContainerTitle>
          <CommentInput
            editable
            multiline
            numberOfLines={10}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={
              !isVisualization
                ? 'Escreva de 1 a 3 aspectos que você considera positivo nesta legenda'
                : ''
            }
            value={positiveComment}
            onChangeText={!isVisualization ? setPositiveComment : () => {}}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
          <ContainerTitle>
            <Icon name="thumb-down" size={30} color="#fff" />
            <Title>Destaques negativos</Title>
          </ContainerTitle>
          <CommentInput
            editable
            multiline
            scrollEnabled
            numberOfLines={10}
            autoCorrect={false}
            onContentSizeChange={() => {}}
            autoCapitalize="none"
            placeholder={
              !isVisualization
                ? 'Escreva de 1 a 3 aspectos que você considera negativo nesta legenda'
                : ''
            }
            value={negativeComment}
            onChangeText={!isVisualization ? setNegativeComment : () => {}}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
          <SubmitButton
            name={isVisualization ? 'cancel' : 'check'}
            onPress={isVisualization ? handlePress : createAnswer}>
            {isVisualization ? 'Finalizar visualização' : 'Salvar'}
          </SubmitButton>
        </Form>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Comments.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Comments.navigationOptions = ({navigation}) => ({
  title: 'Comentários',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          navigation.getParam('getComment') === true
            ? 'TechnicalEvaluate'
            : 'Dashboard',
          {
            tvShow: navigation.getParam('tvShow'),
            user: navigation.getParam('user'),
          },
        );
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
