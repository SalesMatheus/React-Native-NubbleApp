import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua Senha"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{mb: 's10'}}
      />

      <Text preset="paragraphSmall" color="primary" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" preset="primary" title="Entrar" />
      <Button mt="s12" preset="outline" title="Cria uma conta" />
    </Screen>
  );
}
