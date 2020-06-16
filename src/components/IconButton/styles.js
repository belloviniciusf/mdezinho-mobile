import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: ${Dimensions.get('window').height < 600 ? '50px' : '80px'};
  background: #3b9eff;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 20px;
  align-self: stretch;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${(props) => (props.fontsize ? props.fontsize : '18px')};
  text-align: center;
`;
