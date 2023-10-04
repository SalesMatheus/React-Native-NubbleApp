import {PostComment, postCommentService} from '@domain';
import {usePaginatedList} from '@infra';

export function usePostCommentList(post_id: number) {
  function getList(page: number) {
    return postCommentService.getList(page, post_id);
  }

  return usePaginatedList<PostComment>(getList);
}
