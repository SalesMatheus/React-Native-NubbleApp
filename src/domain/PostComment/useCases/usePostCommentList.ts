import {PostComment, postCommentService, usePaginatedList} from '@domain';

export function usePostCommentList(post_id: number) {
  function getList(page: number) {
    return postCommentService.getList(page, post_id);
  }

  return usePaginatedList<PostComment>(getList);
}
