import {Platform} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '../../../components/IconButton';
import Input from '../../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 5px 0px;
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: 150px;
  height: 80px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.View`
  padding: 5px;
  border-radius: 10px;
  background: ${(props) => (props.positive ? '#8bc34a' : '#f44336')};
  margin: 10px 0px;
  flex-direction: row;
`;

export const CommentInput = styled(Input)`
  margin: 0 20px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  align-self: center;
  margin-left: 10px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  flex: 1;
  width: 100px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(IconButton)`
  padding: 0 10px;
  margin: 10px 20px;
  height: 60px;
`;
