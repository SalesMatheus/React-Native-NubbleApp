import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.JIk0IJ4ThRkcWYSAIlNTgFghsUPME6j9cjn5Q7gWLlXDGhEaog0HmSdwM7pL',
  },
});
