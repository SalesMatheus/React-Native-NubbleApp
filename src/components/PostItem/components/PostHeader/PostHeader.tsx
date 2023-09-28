import React from 'react';

import {Post} from '@domain';

import {Box, Text, ProfileAvatar} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" mb="s16" alignItems="center">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
}
