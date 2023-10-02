import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  onEndReached: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({onEndReached, hasNextPage}: Props) {
  if (!hasNextPage) {
    return null;
  }

  return (
    <Pressable onPress={onEndReached}>
      <Text color="primary" preset="paragraphLarge" bold textAlign="center">
        Ver mais
      </Text>
    </Pressable>
  );
}
