import API from '../configAPI.js';
import axios from 'axios';
import React from 'react';


export function getProductDetails(productId) {
  return axios.get(API.url + `/products/${productId}`, API.auth);
}

export function getProductStyles(productId) {
  return axios.get(API.url + `/products/${productId}/styles`, API.auth);
}

export function getProductReviewsMeta(productId) {
  return axios.get(API.url + `/reviews/meta?product_id=${productId}`, API.auth)
    .then( resVal => calcStarRating(resVal.data.ratings));
}

export function getProductReviews(productId) {
  return axios.get(API.url + `/reviews?count=1000&product_id=${productId}`, API.auth)
    .then( resVal => resVal.data.results.length );
}

export function calcStarRating(starRatings) {
  let totalScore = 0;
  let totalRatings = 0;

  for (var rating in starRatings) {
    totalScore += rating * Number(starRatings[rating]);
    totalRatings += Number(starRatings[rating]);
  }

  if (!totalRatings) {
    return null;
  } else {
    return Math.round((totalScore / totalRatings) * 10) / 10;
  }
}

export function displayNextImage(current, imagesArray) {
  let nextIndex = current.initialIndex + 1;
  if (nextIndex === imagesArray.length) {
    nextIndex = 0;
  }
  return {
    url: imagesArray[nextIndex],
    initialIndex: nextIndex
  };
}

export function displayPreviousImage(current, imagesArray) {
  let nextIndex = current.initialIndex - 1;
  if (nextIndex < 0) {
    nextIndex = imagesArray.length - 1;
  }
  return {
    url: imagesArray[nextIndex],
    initialIndex: nextIndex
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

export function getDefaultStyleDetails(data) {
  let defaultStyleDetails = {
    name: '',
    originalPrice: '',
    salePrice: '',
    skus: {},
    primaryImageURL: '',
    largePhotoURLs: [],
    smallPhotoURLs: []
  };
  for (var style of data.results) {
    if (style['default?']) {
      defaultStyleDetails.name = style.name;
      defaultStyleDetails.originalPrice = style.original_price;
      defaultStyleDetails.salePrice = style.sale_price;
      defaultStyleDetails.skus = style.skus;
      defaultStyleDetails.primaryImageURL = style.photos[0].url;
      for (var photo of style.photos) {
        defaultStyleDetails.largePhotoURLs.push(photo.url);
        defaultStyleDetails.smallPhotoURLs.push(photo.thumbnail_url);
      }
      break;
    }
  }
  return defaultStyleDetails;
}

export function getNewStyleDetails(styles, index) {
  let newStyleDetails = {
    name: styles.results[index].name,
    originalPrice: styles.results[index].original_price,
    salePrice: styles.results[index].sale_price,
    skus: styles.results[index].skus,
    primaryImageURL: styles.results[index].photos[0].url,
    largePhotoURLs: [],
    smallPhotoURLs: []
  };
  for (var photo of styles.results[index].photos) {
    newStyleDetails.largePhotoURLs.push(photo.url);
    newStyleDetails.smallPhotoURLs.push(photo.thumbnail_url);
  }
  return newStyleDetails;
}