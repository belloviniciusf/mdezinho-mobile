import styled from 'styled-components/native';
import NavButton from '../NavButton';

export const Container = styled.View`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 5px;
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
  width: 73px;
  align-self: center;
  height: 50px;
`;
