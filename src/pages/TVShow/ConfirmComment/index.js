import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import ConfirmarComentariosGif from '../../../assets/gifs/ConfirmarComentarios.gif';
import api from '../../../services/api';
import Background from '../../../components/Background';
import {
  Container,
  ContainerMessage,
  ContainerButtons,
  Label,
  ConfirmLabel,
  CentralImage,
  SubmitButton,
} from './styles';

export default function Attention({navigation}) {
  const data = navigation.getParam('data');
  const language = useSelector((state) => state.user.language);

  async function handlePress(notAnswered) {
    try {
      await api.post('answers', {...data, notAnswered, last: true});

      Alert.alert(
        'Eba!',
        'Seus comentários foram salvos com sucesso. Muito obrigado.',
      );

      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao tentar salvar seu comentário, tente novamente.',
      );
    }
  }

  return (
    <Background>
      <Container>
        {language === 'libras' && (
          <CentralImage source={ConfirmarComentariosGif} />
        )}
        <ContainerMessage>
          <Label>
            Os comentários poderão ser disponibilizados para a visualização de
            outros usuários. Não serão aceitos comentários que contenham nomes
            pessoais, autoridades, propagandas, ou qualquer outro item que não
            esteja de acordo com a avaliação da legenda.
          </Label>
          <ConfirmLabel>Deseja realmente salvar seu comentário?</ConfirmLabel>
          <ContainerButtons>
            <SubmitButton
              size={30}
              name="thumb-down"
              onPress={() => {
                handlePress(true);
              }}>
              Não
            </SubmitButton>
            <SubmitButton
              size={30}
              name="thumb-up"
              onPress={() => {
                handlePress(false);
              }}>
              Sim
            </SubmitButton>
          </ContainerButtons>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Attention.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Attention.navigationOptions = ({navigation}) => ({
  title: 'Aviso',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Comments');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
