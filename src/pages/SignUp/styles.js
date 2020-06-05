import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const ContainerPicker = styled.View`
  padding: 5px 15px;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
