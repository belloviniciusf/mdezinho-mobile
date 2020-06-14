import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Header} from 'react-navigation-stack';
import IconButton from '../../../components/IconButton';
import Input from '../../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  keyboardVerticalOffset: 20,
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 5px 0px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0},
})`
  /* flex: 1;
  display: flex; */
  align-self: stretch;
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: ${Dimensions.get('window').height < 600 ? '150px' : '150px'};
  height: ${Dimensions.get('window').height < 600 ? '70px' : '80px'};
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.View`
  padding: 5px;
  border-radius: 10px;
  background: ${(props) => (props.positive ? '#8bc34a' : '#f44336')};
  margin: ${Dimensions.get('window').height < 600 ? '5px 0px' : '10px 15px'};
  flex-direction: row;
  justify-content: center;
`;

export const CommentInput = styled(Input)`
  margin: 0 20px;
  height: ${Dimensions.get('window').height < 600 ? '70px' : '100px'};
`;

export const Title = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '16px' : '20px'};
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-left: 10px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  flex: 1;
  width: 100px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(IconButton).attrs({
  size: Dimensions.get('window').height < 600 ? 20 : 30,
  fontsize: Dimensions.get('window').height < 600 ? '12px' : '16px',
})`
  padding: 0 10px;
  margin: 10px 20px;
  height: ${Dimensions.get('window').height < 600 ? '45px' : '60px'};
`;
