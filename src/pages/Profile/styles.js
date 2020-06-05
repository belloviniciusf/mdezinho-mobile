import styled from 'styled-components/native';

import Input from '../../components/Input';
import IconButton from '../../components/IconButton';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 4px;
`;

export const SubmitButton = styled(IconButton)`
  height: 60px;
  margin-bottom: 10px;
`;

export const LogoutButton = styled(IconButton)`
  height: 60px;
  padding: 0px;
  margin-top: 2px;
`;
