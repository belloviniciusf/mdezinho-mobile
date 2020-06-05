import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #000;
  font-weight: bold;
  align-self: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;
`;

export const ContainerLogos = styled.View`
  margin-top: 50px;
  flex-direction: row;
`;

export const SubImage = styled.Image`
  margin: 0 20px;
  width: 200px;
  height: 200px;
`;
