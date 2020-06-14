import styled from 'styled-components/native';
import NavButton from '../NavButton';

export const Container = styled.View`
  border-radius: 4px;
  margin: 5px;
  align-self: stretch;
  flex: 1;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Button = styled(NavButton)`
  flex: 1;
  align-self: center;
  height: 50px;
`;
