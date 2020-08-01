const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://localhost:8080';

export default {
  URL,
};
