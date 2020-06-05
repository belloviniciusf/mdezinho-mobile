import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 5px 0px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 15px;
`;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const ContainerLogos = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const SubImage = styled.Image`
  margin: 0 20px;
  width: 110px;
  height: 70px;
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: 150px;
  height: 80px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
