import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import BackButton from '../../components/BackButton';
import {signUpRequest} from '../../store/modules/auth/actions';

import {
  Container,
  ContainerPicker,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const language = useSelector((state) => state.user.language);
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password, type, language));
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <ContainerPicker>
            <Icon name="list" size={20} color="rgba(0,0,0,0.6)" />
            <RNPickerSelect
              placeholder={{label: 'Selecione um perfil'}}
              onValueChange={(value) => setType(value)}
              style={{...pickerSelectStyles}}
              items={[
                {label: 'Surdo', value: 'surdo'},
                {label: 'DA', value: 'da'},
                {label: 'Ouvinte', value: 'ouvinte'},
              ]}
            />
          </ContainerPicker>

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton
            loading={loading}
            onPress={() => {
              handleSubmit();
            }}>
            Criar conta
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 15,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '500',
  },
  inputAndroid: {
    fontSize: Dimensions.get('window').height < 600 ? 12 : 16,
    width: Dimensions.get('window').height < 600 ? 200 : 250,
    borderColor: '#eee',
    borderRadius: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});

SignUp.navigationOptions = ({navigation}) => ({
  title: 'Cadastro',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectLanguage');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
