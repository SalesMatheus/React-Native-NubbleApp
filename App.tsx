import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box padding="s20">
          <Button title="Enter" marginBottom="s12" />
          <Button title="loading" loading />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
