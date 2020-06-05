import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import Gif from '../../../assets/P1.gif';
import {Container, ContainerMessage, CentralImage, Title} from './styles';

export default function Copyright({navigation}) {
  const language = useSelector((state) => state.user.language);

  return (
    <Background>
      <Container>
        {language === 'libras' && <CentralImage source={Gif} />}
        <ContainerMessage>
          <Title>
            Uso e reprodução deste aplicativo é livre e gratuito. Adaptações do
            mesmo podem ser feitas com anuência dos autores.
          </Title>
        </ContainerMessage>
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Copyright.navigationOptions = ({navigation}) => ({
  title: 'Direitos autorais',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('LegalInformations');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
