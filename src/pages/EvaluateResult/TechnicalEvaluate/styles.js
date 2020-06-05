import {Platform} from 'react-native';
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
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  align-self: center;
  margin-right: 5px;
`;

export const OptionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  numColumns: 1,
})``;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const ContainerEvaluate = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
  align-self: stretch;
`;

export const ImageEvaluate = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-left: auto;
`;

export const SubmitButton = styled(IconButton)`
  padding: 0 30px;
  margin: 5px;
  height: 60px;
`;
