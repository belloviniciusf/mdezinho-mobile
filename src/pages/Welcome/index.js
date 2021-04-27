import React, {useEffect} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Background from '../../components/Background';
import AppealLogo from '../../assets/appeal.png';
import {Title, Label, Container, SubImage} from './styles';

export default function Welcome({navigation}) {
  const handlePress = () => {
    navigation.navigate('AcessibleWelcome');
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AcessibleWelcome');
    }, 5000);
  }, []);

  return (
    <Background>
      <Container>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <Title>APP-EAL</Title>
            <SubImage source={AppealLogo} />
            <Title>Seja bem-vindo(a)</Title>
            <Label>GEPETIC-UFGD</Label>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    </Background>
  );
}
