import API from '../configAPI.js';
import axios from 'axios';

export function getProducts() {
  return axios.get(API.url + '/products/17067', API.auth);
}

export function getProductStyles() {
  return axios.get(API.url + '/products/17067/styles', API.auth);
}

export function displayNextImage(current, imagesArray) {
  let nextIndex = current.index + 1;
  if (nextIndex === imagesArray.length) {
    nextIndex = 0;
  }
  return {
    url: imagesArray[nextIndex].url,
    index: nextIndex
  };
}

export function displayPreviousImage(current, imagesArray) {
  let nextIndex = current.index - 1;
  if (nextIndex < 0) {
    nextIndex = imagesArray.length - 1;
  }
  return {
    url: imagesArray[nextIndex].url,
    index: nextIndex
  };
}

export function incrementCarouselRange(current, imagesArray) {
  let imageIndexs = [];
  let photoStorage = [];
  let overflowIndex = 0;
  for (var i = 0; i <= 3; i++) {
    if (current.initialIndex + 1 + i <= imagesArray.length - 1) {
      imageIndexs.push(current.initialIndex + 1 + i);
    } else {
      imageIndexs.push(overflowIndex);
      overflowIndex++;
    }
  }
  for (var index of imageIndexs) {
    photoStorage.push(imagesArray[index]);
  }
  return {
    images: photoStorage,
    initialIndex: imageIndexs[0]
  };
}

export function decrementCarouselRange(current, imagesArray) {
  let imageIndexs = [];
  let photoStorage = [];
  let overflowIndexTop = imagesArray.length - 1;
  let overflowIndexBottom = 0;
  for (var i = 0; i <= 3; i++) {
    if (current.initialIndex + i - 1 >= 0) {
      if (current.initialIndex + i - 1 <= imagesArray.length - 1) {
        imageIndexs.push(current.initialIndex + i - 1);
      } else {
        imageIndexs.push(overflowIndexBottom);
        overflowIndexBottom++;
      }
    } else {
      imageIndexs.push(overflowIndexTop);
      overflowIndexTop--;
    }
  }
  for (var index of imageIndexs) {
    photoStorage.push(imagesArray[index]);
  }
  return {
    images: photoStorage,
    initialIndex: imageIndexs[0]
  };
}

export function createDefaultStyle(data) {
  let defaultStyle = {
    name: '',
    originalPrice: '',
    primaryImage: {},
    photoInfo: []
  };
  for (var style of data.results) {
    if (style['default?']) {
      defaultStyle.name = style.name;
      defaultStyle.originalPrice = style.original_price;
      defaultStyle.primaryImage = {url: style.photos[0].url, index: 0};
      for (var photo of style.photos) {
        defaultStyle.photoInfo.push(photo);
      }
      break;
    }
  }
  return defaultStyle;
}

export function getNewProductDetails(index, styles) {
  let newProductDetails = {
    name: styles.results[index].name,
    originalPrice: styles.results[index].original_price,
    primaryURL: '',
    largePhotoURLs: [],
    smallPhotoURLs: []
  };
  for (var photo of styles.results[index].photos) {
    if (!newProductDetails.primaryURL) {
      newProductDetails.primaryURL = photo.url;
    }
    newProductDetails.largePhotoURLs.push(photo);
    newProductDetails.smallPhotoURLs.push(photo);
  }
  return newProductDetails;
}