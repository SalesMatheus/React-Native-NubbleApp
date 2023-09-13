import React from 'react';

import {ActivityIndicator, Box, Text} from '@components';

interface Props {
  loading: boolean;
  error: boolean;
}

export function HomeEmpty({loading, error}: Props) {
  let component = (
    <Text preset="paragraphMedium">Não há publicações no seu feed</Text>
  );
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <Text preset="paragraphMedium">Não foi possível carregar o feed</Text>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
