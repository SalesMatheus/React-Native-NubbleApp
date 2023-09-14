import {PageApi, PageParams, api} from '@api';

import {PostApi} from './PostTypes';

async function getList(params?: PageParams): Promise<PageApi<PostApi>> {
  const {data} = await api.get<PageApi<PostApi>>('user/post', {
    params,
  });

  return data;
}

export const postApi = {
  getList,
};
