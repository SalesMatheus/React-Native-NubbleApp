import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

import {Icon} from './src/components/Icon/Icon';

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
          <Icon name="eyeOn" color="error" size={40} />
          <Icon name="eyeOff" color="error" size={40} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
