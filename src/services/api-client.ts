import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '36ff906a9100474791ce6c4a2b6ce642'
  }
});
