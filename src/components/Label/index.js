import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export default styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
  text-align: center;
  font-size: ${Dimensions.get('window').height < 600 ? '16px' : '20px'};
`;
