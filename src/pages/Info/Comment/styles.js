import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import SmallButton from '../../../components/SmallButton';
import Input from '../../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
`;

export const ContainerTitle = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: ${(props) => (props.positive ? '#8bc34a' : '#f44336')};
  margin: 10px 0px;
  flex-direction: row;
`;

export const CommentInput = styled(Input)`
  margin: 0 20px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  align-self: center;
  margin-left: 10px;
`;

export const OptionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 3,
})``;

export const Option = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 15px 45px;
  flex: 1;

  border: ${(props) =>
    props.isSelected ? '1px solid #3b9eff' : '1px solid #eee'};
  align-items: center;
  margin: 0px 15px 35px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  flex: 1;
  width: 100px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  padding: 0 30px;
  margin: 20px 20px;
`;

export const EndButton = styled(SmallButton)`
  padding: 0 10px;
  margin: 10px 20px;
`;

export const ContinueButton = styled(SmallButton)`
  padding: 0 10px;
  margin: 10px 20px;
`;

export const ContainerButtons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: 200px;
  height: 100px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
