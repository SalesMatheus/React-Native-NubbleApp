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
          <Button
            title="Primary"
            marginBottom="s12"
            preset="primary"
            disabled
          />
          <Button title="Outline" marginBottom="s12" preset="outline" />
          <Button title="loading" marginBottom="s12" loading />
          <Button title="loading outline" preset="outline" loading />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
