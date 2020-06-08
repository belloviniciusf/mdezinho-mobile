import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import Navbar from '../../../components/Navbar';
import Gif from '../../../assets/gifs/FichaTecnica.gif';
import {
  Container,
  ContainerMessage,
  CentralImage,
  Title,
  Label,
} from './styles';

export default function Product({navigation}) {
  const language = useSelector((state) => state.user.language);

  return (
    <Background>
      <Container>
        {language === 'libras' && <CentralImage source={Gif} />}
        <ContainerMessage>
          <Title>Ficha técnica</Title>
          <Label>Formato: Android</Label>
          <Label>Versão: 1.0</Label>
          <Label>Tecnologia: React Native</Label>
          <Label>Classificação de conteúdo: Livre</Label>
          <Label>Fornecido por: UFGD</Label>
          <Label>Desenvolvedor: Vinícius Belló</Label>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Product.navigationOptions = ({navigation}) => ({
  title: 'Produto',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('LegalInformations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
