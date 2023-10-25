import {postCommentService} from '@domain';
import {usePaginatedList, QueryKeys} from '@infra';

export function usePostCommentList(post_id: number) {
  function getList(page: number) {
    return postCommentService.getList(page, post_id);
  }

  return usePaginatedList([QueryKeys.PostList], getList);
}
