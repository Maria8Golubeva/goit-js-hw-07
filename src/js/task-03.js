const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesContainer = document.querySelector('#gallery');
const elements = images.map(image => {
    const imageEl = document.createElement('li');
    imageEl.classList.add('image-style');
    imageEl.insertAdjacentHTML('afterbegin', `<img src="${image.url}" alt = "${image.alt}"></img>`);
    imageEl.style.width = '460px';
    imageEl.style.margin = '4px';

    return imageEl;
});

imagesContainer.append(...elements);

const galleryStyle = document.querySelector('style');
galleryStyle.insertAdjacentHTML('beforeend',
    `#gallery {
        display: flex;
        list-style: none;
    }`);

const imageStyle = document.querySelector('style');
imageStyle.insertAdjacentHTML('beforeend', 
    `img {
        display: block;
        max-width: 100%;
        height: auto;
      }`)
