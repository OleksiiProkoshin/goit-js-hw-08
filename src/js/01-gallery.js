import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`)
  .join("");

galleryList.innerHTML = galleryMarkup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    });
  
console.log(galleryItems);
