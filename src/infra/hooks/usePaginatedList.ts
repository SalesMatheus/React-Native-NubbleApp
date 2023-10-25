// @ts-nocheck
import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

interface UsePaginatedListResult<T> {
  dataList: T[];
  loading: boolean;
  error: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginatedListResult<Data> {
  const [dataList, setDataList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setDataList(newList);
    }
  }, [query.data]);

  return {
    loading: query.isLoading,
    error: query.isError,
    dataList,
    onRefresh: query.refetch,
    onEndReached: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
