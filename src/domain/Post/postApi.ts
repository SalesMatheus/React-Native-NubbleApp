import {PageApi, api} from '@api';

import {PostApi} from './PostTypes';

async function getList(): Promise<PageApi<PostApi>> {
  const {data} = await api.get<PageApi<PostApi>>('user/post');

  return data;
}

export const postApi = {
  getList,
};
