import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import SmallButton from '../../../components/SmallButton';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: ${Dimensions.get('window').height < 600 ? '5px 0px' : '5px 0px'};
`;

export const CentralImage = styled.Image`
  align-self: flex-end;
  width: ${Dimensions.get('window').height < 600 ? '120px' : '160px'};
  height: ${Dimensions.get('window').height < 600 ? '70px' : '100px'};
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.View`
  padding: ${Dimensions.get('window').height < 600 ? '2px' : '10px'};
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
`;

export const Title = styled.Text`
  font-size: ${Dimensions.get('window').height < 600 ? '14px' : '16px'};
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
  min-height: ${Dimensions.get('window').height < 600 ? '155px' : '180px'};
  display: flex;
`;

export const Border = styled.View`
  background: ${(props) => (props.isSelected ? '#c1d5e0' : '#fff')};
  flex: 1;
  margin: 5px 10px;
  padding: ${Dimensions.get('window').height < 600 ? '5px 0px' : '10px 0px'};
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
  width: ${Dimensions.get('window').height < 600 ? '26px' : '30px'};
  height: ${Dimensions.get('window').height < 600 ? '26px' : '30px'};
  border-radius: ${Dimensions.get('window').height < 600 ? '13px' : '15px'};
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: ${Dimensions.get('window').height < 600 ? '11px' : '12px'};
  width: 100%;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  padding: 0 10px;
  margin: ${Dimensions.get('window').height < 600 ? '10px 15px' : ' 10px 20px'};
`;

export const EndButton = styled(SmallButton)`
  margin: 10px 20px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const ContainerEvaluation = styled.View`
  margin: 10px;
`;
