import React from 'react';

import {usePostCommentList} from '@domain';

import {Screen, Box, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {} = usePostCommentList(postId);
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
