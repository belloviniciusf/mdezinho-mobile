import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';

export const Container = styled(RectButton)`
  height: ${Dimensions.get('window').height < 600 ? '38px' : '48px'};
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${Dimensions.get('window').height < 600 ? '14px' : '16px'};
`;
