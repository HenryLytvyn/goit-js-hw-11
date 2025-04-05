import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-function';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const imagesList = document.querySelector('#images-list');
const btn = document.querySelector('.btn-submit');
let imagesArr;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const usersRequest = event.target.elements.text.value.trim();
  if (!usersRequest) {
    return;
  }

  // console.log(typeof usersRequest);
  imagesArr = getImagesByQuery(usersRequest);
  setTimeout(() => {
    console.log(imagesArr);
  }, 2000);

  // createGallery(imagesArr);
}

// const form = document.querySelector('.form');
// const input = document.querySelector('.form-input');
// const imagesList = document.querySelector('#images-list');
// const btn = document.querySelector('.btn-submit');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const usersRequest = event.target.elements.text.value.trim();
//   if (!usersRequest) {
//     return;
//   }

//   // console.log(typeof usersRequest);
//   const imagesArr = getImagesByQuery(usersRequest);
//   setTimeout(() => {
//     console.log(imagesArr);
//   }, 2000);

//   // createGallery(imagesArr);
