import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './PostTypes';

const PER_PAGE = 5;

async function getList(page: number): Promise<Page<Post>> {
  const postList = await postApi.getList({page, per_page: PER_PAGE});

  return {
    data: postList.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postList.meta),
  };
}

export const postService = {
  getList,
};
