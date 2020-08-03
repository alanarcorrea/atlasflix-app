const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://atlasflix-api.herokuapp.com';

export default {
  URL,
};
