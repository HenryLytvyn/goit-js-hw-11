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

getImagesByQuery('cat');
