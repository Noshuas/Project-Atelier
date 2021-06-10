import axios from 'axios';
import React from 'react';
import API from '../configAPI.js';
// import ImageKit from 'imagekit-javascript';




let RandRAPIcalls = {};


RandRAPIcalls.getProducts = function () {
  return axios.get(API.url + '/products', API.auth);
};

RandRAPIcalls.getReviews = function (productId, sort = 'relevant', count = 2, page = 1) {
  let newParams = {
    page: page,
    count: count,
    sort: sort,
    product_id: productId
  };

  return axios.get(API.url + '/reviews', { params: newParams, headers: API.auth.headers });
};

RandRAPIcalls.getReviewsMeta = function (productId) {
  let newParams = {
    product_id: productId
  };

  return axios.get(API.url + '/reviews/meta', { params: newParams, headers: API.auth.headers });
};

RandRAPIcalls.postHelpfullnessFeedback = function (reviewId, helpful) {
  let newParams = {
    review_id: reviewId
  };

  let url = '/reviews/' + reviewId + '/';

  url += helpful ? 'helpful' : 'report';

  return axios.put(API.url + url, {}, API.auth);
};

RandRAPIcalls.postReview = function (object) {
  console.log(object);
  axios.post(API.url + '/reviews', {}, { params: object, headers: API.auth.headers })
    .then((res) => console.log('params', res));

  // axios.post(API.url + '/reviews', { body: object }, API.auth)
  //   .then((res) => console.log('body', res));

  // axios.post(API.url + '/reviews', object, API.auth)
  //   .then((res) => console.log('plain', res));
};

export default RandRAPIcalls;

