import React from 'react';

import {Screen, Box, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  console.log(route.params.postId);
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
