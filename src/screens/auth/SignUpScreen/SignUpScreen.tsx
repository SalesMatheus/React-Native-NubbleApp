import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  function submitForm() {
    // TODO: implement
    navigation.navigate('SuccessScreen');
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />

      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua Senha"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={submitForm} preset="primary" title="Criar conta" />
    </Screen>
  );
}
