import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-function';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  showLoader();
  const usersRequest = event.target.elements.text.value.trim();
  if (!usersRequest) {
    return;
  }

  getImagesByQuery(usersRequest)
    .then(response => {
      const array = response.data.hits;
      if (!array.length) {
        iziToast.show({
          iconUrl: './img/error.svg',
          iconColor: '#ffffff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#B51B1B',
          messageColor: '#ffffff',
        });
        clearGallery();
        hideLoader();
        return;
      }
      createGallery(array);
      hideLoader();
    })

    .catch(error => console.log(error.message));

  form.reset();
}
