import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.View`
  padding: 20px 15px;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 1px solid #eee;

  flex-direction: row;
  align-items: center;
`;

export const TSelect = styled(RNPickerSelect).attrs({
  placeholder: {label: 'Selecione um item'},
})`
  flex: 1;
`;
