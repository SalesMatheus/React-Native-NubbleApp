import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.NazfMqIA8dcMJjUuJJBbOqOLkLPbBM8PTvJHhn1dD-NE3ZDWBBJKL4yvw6wg',
  },
});
