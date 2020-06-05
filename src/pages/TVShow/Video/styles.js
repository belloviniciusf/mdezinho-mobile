import {Platform} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '../../../components/IconButton';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
`;

export const SubmitButton = styled(IconButton)`
  padding: 10px 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: center;
  height: 80px;
  display: flex;
`;
