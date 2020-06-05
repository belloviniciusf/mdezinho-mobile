import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 5px;
`;

export const Title = styled(Label)`
  font-weight: bold;
`;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  padding: 10px;
  height: 270px;
  width: 320px;
  margin: 5px;
`;
