import {useState} from 'react';

import {postCommentService} from '@domain';

export function usePostCommentCreate(post_id: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  async function createComment(message: string) {
    try {
      setError(false);
      setLoading(true);
      await postCommentService.create(post_id, message);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createComment, loading, error};
}
