import {useCallback, useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
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

  const onPullRefreshing = useCallback(async () => {
    setPullRefreshing(true);
    await fetchData();
    setPullRefreshing(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    pullRefreshing,
    onRefresh: onPullRefreshing,
  };
}
