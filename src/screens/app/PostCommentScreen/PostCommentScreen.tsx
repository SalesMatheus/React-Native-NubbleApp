import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentItem, PostCommentBottom} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {dataList, onEndReached, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataList}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: bottom}}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          <PostCommentBottom
            onEndReached={onEndReached}
            hasNextPage={hasNextPage}
          />
        }
      />
    </Screen>
  );
}
