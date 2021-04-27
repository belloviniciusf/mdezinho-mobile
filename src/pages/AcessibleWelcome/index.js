import React, {useEffect} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Background from '../../components/Background';
import BemVindoGif from '../../assets/gifs/Bemvindo.gif';
import UfgdLogo from '../../assets/ufgd-logo.png';
import GepeticLogo from '../../assets/gepetic.png';
import {
  Title,
  Label,
  Container,
  ContainerLogos,
  CentralImage,
  SubImage,
} from './styles';

export default function AcessibleWelcome({navigation}) {
  const handlePress = () => {
    navigation.navigate('SelectLanguage');
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SelectLanguage');
    }, 5000);
  }, []);

  return (
    <Background>
      <Container>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <Title>APP-EAL</Title>
            <CentralImage source={BemVindoGif} />
            <Label>Seja bem-vindo(a)</Label>
            <ContainerLogos>
              <SubImage source={GepeticLogo} />
              <SubImage resizeMode="contain" source={UfgdLogo} />
            </ContainerLogos>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    </Background>
  );
}
