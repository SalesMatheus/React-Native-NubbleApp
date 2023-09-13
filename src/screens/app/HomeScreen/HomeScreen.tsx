import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {postService, Post} from '@domain';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [loading, setLoading] = useState(true);
  const [pullRefreshing, setPullRefreshing] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);

      const list = await postService.getList();
      setPostList(list);
    } catch (er: any) {
      setError(true);
      console.error(er);
    } finally {
      setLoading(false);
    }
  }
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  const onPullRefreshing = useCallback(async () => {
    setPullRefreshing(true);
    await fetchData();
    setPullRefreshing(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty error={error} loading={loading} />}
        refreshControl={
          <RefreshControl
            refreshing={pullRefreshing}
            onRefresh={onPullRefreshing}
          />
        }
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
