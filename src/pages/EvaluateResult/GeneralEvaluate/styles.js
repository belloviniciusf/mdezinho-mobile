import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '../../../components/IconButton';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '14px' : '18px'};
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '16px' : '20px'};
  color: rgba(0, 0, 0, 0.8);
  align-self: center;
`;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const ContainerEvaluate = styled.View`
  margin: 5px 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
  align-self: stretch;
`;

export const ImageEvaluate = styled.Image`
  width: ${Dimensions.get('window').height < 600 ? '30px' : '50px'};
  height: ${Dimensions.get('window').height < 600 ? '30px' : '50px'};
  border-radius: ${Dimensions.get('window').height < 600 ? '15px' : '25px'};
  margin-bottom: 10px;
  margin-left: auto;
`;

export const SubmitButton = styled(IconButton)`
  padding: 10px 2px;
  margin: 10px;
  height: ${Dimensions.get('window').height < 600 ? '60px' : '70px'};
  align-self: center;
  flex: 1;
`;

export const ContainerButtons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;
