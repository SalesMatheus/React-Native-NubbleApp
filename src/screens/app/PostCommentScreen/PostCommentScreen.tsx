import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, TextMessage} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentItem, PostCommentBottom} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const [message, setMessage] = useState('');

  const postId = route.params.postId;
  const {dataList, onEndReached, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {
    console.log('onPressSend');
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
        <TextMessage
          placeholder="Adicione um comentário"
          value={message}
          onChangeText={setMessage}
          onPressSend={onPressSend}
        />
      </Box>
    </Screen>
  );
}
