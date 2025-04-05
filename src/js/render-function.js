import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import getImagesByQuery from './pixabay-api.js';

export function createGallery(images) {
  gallery.indexHTML() = images
    .map(
      ({
        webformatURL,
        //   largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <img class="img" src="${webformatURL}" alt="${tags}" />
  <div class="box-statistic">
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${downloads}</p>
      </li>
    </ul>
  </div>
</li>`
    )
    .join('');
}

export function clearGallery() {}
export function showLoader() {}
export function hideLoader() {}

// const gallery = document.querySelector('.gallery');

// const galleryHTML = images
//   .map(
//     item => `<li class='gallery-item'><a class="gallery-link" href='${item.original}'>
//     <img
//       class="gallery-image"
//       src='${item.preview}'
//       alt="${item.description}"
//     />
//   </a></li>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', galleryHTML);

// new SimpleLightbox('.gallery li a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
