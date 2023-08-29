import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" mb="s16" alignItems="center">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 16}}
      />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
}
