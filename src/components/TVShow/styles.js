import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Info = styled.View``;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const Date = styled(Name)`
  font-size: 14px;
`;

export const Time = styled.Text`
  color: #9e9e9e;
  font-size: 14px;
  margin-top: 4px;
`;

export const IconEvaluated = styled(Icon).attrs({
  size: 15,
  name: 'check-circle',
  color: '#8bc34a',
})`
  margin-left: 5px;
  justify-content: flex-end;
  align-items: center;
`;
