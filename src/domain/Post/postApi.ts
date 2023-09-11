import {PageApi} from '@api';

import {PostApi} from './PostTypes';

async function getList(): Promise<PageApi<PostApi>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.JIk0IJ4ThRkcWYSAIlNTgFghsUPME6j9cjn5Q7gWLlXDGhEaog0HmSdwM7pL',
    },
  });

  let data: PageApi<PostApi> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
