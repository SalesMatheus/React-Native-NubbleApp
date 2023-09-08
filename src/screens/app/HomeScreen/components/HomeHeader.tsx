import React from 'react';

import {SimpleLogo} from '@brand';

import {Icon, Box} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom="s24"
      paddingHorizontal="s24"
      style={{paddingTop: top}}>
      <SimpleLogo />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
}
