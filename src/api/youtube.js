import axios from 'axios';

const KEY = 'AIzaSyA_aFROVJjOgkspysk4MVubatsTyyOrsYw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
