import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import fundo from '../../assets/fundo.png';

export default styled(ImageBackground).attrs({
  source: fundo,
})`
  justify-content: center;
  flex: 1;
`;
