import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {
    loading,
    error,
    dataList: postList,
    onRefresh,
    onEndReached,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty error={error} loading={loading} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        refreshing={loading}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingBottom: 0,
  paddingTop: 0,
  paddingHorizontal: 0,
};
