import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #3b9eff;
  border-radius: 4px;
  text-shadow: 3px 3px 4px #fff;
  text-align: center;
  font-weight: bold;
  align-self: stretch;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-top: 5px;
`;
