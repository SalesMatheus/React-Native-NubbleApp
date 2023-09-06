import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text'>;

export function PostBottom({author, commentCount, text}: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box mt="s16">
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text bold preset="paragraphSmall" mt="s8" color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
