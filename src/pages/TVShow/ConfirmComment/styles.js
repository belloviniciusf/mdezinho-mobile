import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '../../../components/IconButton';

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

export const Label = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '14px' : '18px'};
  text-align: center;
  align-self: center;
`;

export const ConfirmLabel = styled(Label)`
  font-size: ${Dimensions.get('window').height < 600 ? '18px' : '22px'};
  font-weight: 600;
  margin-top: 10px;
`;

export const ContainerButtons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-content: center;
`;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const SubmitButton = styled(IconButton)`
  padding: 0 40px;
  margin: 10px 20px;
  height: ${Dimensions.get('window').height < 700 ? '60px' : '70px'};
`;
