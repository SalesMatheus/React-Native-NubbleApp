import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box padding="s20">
          <Box marginBottom="s24">
            <Button title="Entrar" />
          </Box>
          <Button title="Entrar" loading />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
