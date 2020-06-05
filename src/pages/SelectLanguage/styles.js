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
  text-align: center;
  margin-top: 10px;
`;

export const OptionText = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-left: 10px;
  flex: 1;
`;

export const ContainerLogos = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
`;

export const SubImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
