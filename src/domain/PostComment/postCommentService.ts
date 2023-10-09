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

async function remove(postCommentId: number): Promise<string> {
  const {message} = await postCommentApi.remove(postCommentId);

  return message;
}

/**
 * @description user can delete the comment if he is the author of the comment or the author of the post
 * @param useId the current user id
 * @param postComment comment to delete
 * @param postAuthorId the author of the post
 * @returns true if the user can delete the comment
 */
function isAllowToDelete(
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean {
  return postComment.author.id === userId || postAuthorId === userId;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
