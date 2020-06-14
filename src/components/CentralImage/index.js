import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export default styled.Image`
  align-self: ${(props) => props.align || 'center'};
  width: ${Dimensions.get('window').height < 600 ? '150px' : '250px'};
  height: ${Dimensions.get('window').height < 600 ? '100px' : '150px'};
  margin-bottom: 5px;
`;
