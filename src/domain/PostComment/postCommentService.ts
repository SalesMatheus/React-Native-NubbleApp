import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  page: number,
  post_id: number,
): Promise<Page<PostComment>> {
  const postCommentList = await postCommentApi.getList(post_id, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentList.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentList.meta),
  };
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postComment = await postCommentApi.create(post_id, message);

  return postCommentAdapter.toPostComment(postComment);
}

export const postCommentService = {
  getList,
  create,
};
