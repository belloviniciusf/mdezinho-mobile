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
  text-align: left;
  margin-bottom: 10px;
`;

export const Title = styled(Label)`
  font-weight: bold;
`;

export const ContainerMessage = styled.View`
  padding: 10px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: 200px;
  height: 100px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
