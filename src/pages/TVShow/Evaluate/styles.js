import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import SmallButton from '../../../components/SmallButton';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: 160px;
  height: 100px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
`;

export const ContainerTitle = styled.View`
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
`;

export const Title = styled.Text`
  font-size: 16px;
  display: flex;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
  text-align: center;
`;

export const OptionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 3,
})`
  flex: 1;
  display: flex;
`;

export const Border = styled.View`
  background: ${(props) => (props.isSelected ? '#c1d5e0' : '#fff')};
  flex: 1;
  margin: 5px 10px;
  padding: 10px 0px;
  align-items: center;
  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #eee'};
`;

export const Option = styled(RectButton)`
  flex: 1;

  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #eee'};
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  padding: 0 10px;
  margin: 10px 20px;
`;

export const EndButton = styled(SmallButton)`
  padding: 0 20px;
  margin: 30px 20px;
`;

export const ContainerButtons = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const ContainerEvaluation = styled.View`
  margin: 10px;
`;
