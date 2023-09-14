import {useCallback, useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [pullRefreshing, setPullRefreshing] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);

      const list = await postService.getList(page);

      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNextPage = async () => {
    if (!loading) {
      await fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    postList,
    pullRefreshing,
    onRefresh: onPullRefreshing,
    onEndReached: fetchNextPage,
  };
}
