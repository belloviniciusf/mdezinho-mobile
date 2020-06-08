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
  font-size: 16px;
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
  margin: 15px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const CentralImage = styled.Image`
  align-self: center;
  padding: 10px;
  height: 200px;
  width: 300px;
  margin-bottom: 40px;
`;
