import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, useUser} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;

  const {dataList, onEndReached, hasNextPage, onRefresh} =
    usePostCommentList(postId);
  const {id} = useUser();

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={onRefresh}
        userId={id}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box
        flex={1}
        justifyContent="space-between"
        style={{paddingBottom: bottom}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataList}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 30}}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <PostCommentBottom
              onEndReached={onEndReached}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} onAddComment={onRefresh} />
      </Box>
    </Screen>
  );
}
