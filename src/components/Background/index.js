// import LinearGradient from 'react-native-linear-gradient';
// import styled from 'styled-components/native';

// export default styled(LinearGradient).attrs({
//   colors: ['#3b9eff', '#006db3'],
// })`
//   flex: 1;
// `;

import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import fundo from '../../assets/fundo.png';

export default styled(ImageBackground).attrs({
  source: fundo,
})`
  justify-content: center;
  flex: 1;
`;
