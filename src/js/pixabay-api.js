import axios from 'axios';

const API_KEY = '49626853-35a7cc777388834eb6e89d08d';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  axios(`https://pixabay.com/api/?${params}`)
    .then(response => {
      console.log(response.data.hits);
    })
    .catch(error => console.log(error));
}
