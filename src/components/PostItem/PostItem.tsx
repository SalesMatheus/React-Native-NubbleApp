import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions, PostHeader, PostImage, PostBottom} from './components';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box paddingHorizontal="s24" mb="s24" mt="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
