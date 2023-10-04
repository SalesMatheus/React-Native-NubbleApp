import {PostComment, postCommentService} from '@domain';
import {MutationOptions, useMutation} from '@infra';

export function usePostCommentCreate(
  post_id: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(post_id, message),
    options,
  );

  async function createComment(message: string) {
    return await mutate({message});
  }

  return {createComment, loading, error};
}

// import {useState} from 'react';
// import {PostComment, postCommentService} from '@domain';

// interface Options {
//   onSuccess?: (data: PostComment) => void;
//   onError?: (error: any) => void;
// }

// export function usePostCommentCreate(post_id: number, options?: Options) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<boolean>(false);

//   async function createComment(message: string) {
//     try {
//       setError(false);
//       setLoading(true);
//       const postComment = await postCommentService.create(post_id, message);

//       if (options?.onSuccess) {
//         options.onSuccess(postComment);
//       }
//     } catch (er) {
//       if (options?.onError) {
//         options.onError(er);
//       }
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return {createComment, loading, error};
// }
