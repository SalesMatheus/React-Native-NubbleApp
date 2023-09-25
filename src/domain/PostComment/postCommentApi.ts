import {PageApi, PageParams, api} from '@api';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageApi<PostCommentAPI>> {
  const {data} = await api.get<PageApi<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return data;
}

export const postCommentApi = {
  getList,
};
