import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

function get(path) {
  return fetch(`${URL_CATEGORIES}${path}`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Data is not avaiable');
    });
}

function getAll() {
  return get('');
}

function getAllWithVideos() {
  return get('/withVideos');
}

function create(category) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),

  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Data is not avaiable');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
