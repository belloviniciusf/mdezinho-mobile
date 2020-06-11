import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackButton from '../../../components/BackButton';
import Background from '../../../components/Background';
import Navbar from '../../../components/Navbar';
import {Container, ContainerMessage, Title, Label} from './styles';

export default function Product({navigation}) {
  return (
    <Background>
      <Container>
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
