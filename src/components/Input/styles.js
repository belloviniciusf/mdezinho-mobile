import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  padding: 0 15px;
  height: ${Dimensions.get('window').height < 600 ? '40px' : '55px'};
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 1px solid #eee;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
  flex: 1;
  font-size: ${Dimensions.get('window').height < 600 ? '13px' : '15px'};
  margin-left: 10px;
  color: #000;
`;
