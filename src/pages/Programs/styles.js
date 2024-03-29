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
  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {padding: 25},
})`
  margin-top: 2px;
  margin-bottom: 50px;
`;
