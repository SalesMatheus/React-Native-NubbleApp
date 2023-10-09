import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box} from '@components';

import {Item} from './components/Item';

type Props = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount' | 'id' | 'author'
>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
  id,
  author,
}: Props) {
  const navigation = useNavigation();

  function likePost() {
    console.log('likePost');
  }

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  }

  function favoritePost() {
    console.log('favoritePost');
  }

  return (
    <Box flexDirection="row" gap="s24" mt="s16">
      <Item
        icon={{default: 'heart', marked: 'heartFill'}}
        counter={reactionCount}
        onPress={likePost}
        marked
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        counter={commentCount}
        onPress={navigateToComments}
      />
      <Item
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        counter={favoriteCount}
        onPress={favoritePost}
      />
    </Box>
  );
}
