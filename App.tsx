import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';

import {Box} from './src/components/Box/Box';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s20">
          <Text mb="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu E-mail" />
          </Box>
          <Box>
            <TextInput label="Senha" placeholder="Digite sua Senha" />
          </Box>

          <Text mt="s10" preset="paragraphSmall" color="primary" bold>
            Esqueci minha senha
          </Text>

          <Button mt="s48" preset="primary" title="Entrar" />
          <Button mt="s12" preset="outline" title="Cria uma conta" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
