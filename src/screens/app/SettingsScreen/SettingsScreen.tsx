import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Home Screen</Text>
    </Screen>
  );
}
