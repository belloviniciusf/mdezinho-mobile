import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
`;
export const Label = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '16px' : '20px'};
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
`;

export const ContainerMessage = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const ContainerTitle = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
`;

export const OptionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 3,
})`
  margin-top: 10px;
`;

export const Option = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: ${Dimensions.get('window').height < 600 ? '8px 36px' : '10px 40px'};
  flex: 1;
  align-items: center;
  margin: 0px 12px 30px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  width: 70px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const IconPerson = styled(Icon).attrs({
  name: 'person',
})`
  flex: 1;
  width: 30px;
`;
