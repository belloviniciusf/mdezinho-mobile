import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Background from '../../components/Background';
import {setLanguage} from '../../store/modules/user/actions';
import {
  Title,
  Label,
  Container,
  ContainerLogos,
  SubImage,
  OptionText,
} from './styles';
import Portugues from '../../assets/portugues.png';
import Libras from '../../assets/libras.png';

export default function SelectLanguage({navigation}) {
  const dispatch = useDispatch();

  function handlePress(language) {
    dispatch(setLanguage(language));
    navigation.navigate('SignUp');
  }

  return (
    <Background>
      <Container>
        <View>
          <Title>APP-EAL</Title>
          <Label>
            Escolha abaixo a língua de acesso ao conteúdo do aplicativo
          </Label>
          <TouchableWithoutFeedback
            onPress={() => {
              handlePress('libras');
            }}>
            <ContainerLogos>
              <SubImage source={Libras} />
              <OptionText>Libras</OptionText>
            </ContainerLogos>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handlePress('portugues');
            }}>
            <ContainerLogos>
              <SubImage source={Portugues} />
              <OptionText>Língua Portuguesa</OptionText>
            </ContainerLogos>
          </TouchableWithoutFeedback>
        </View>
      </Container>
    </Background>
  );
}
