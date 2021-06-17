import axios from 'axios';
import React from 'react';

let RandRAPIcalls = {};


RandRAPIcalls.getProducts = function () {
  return axios.get('/products');
};

RandRAPIcalls.getReviews = function (productId, sort = 'relevant', count = 2, page = 1) {
  let newParams = {
    page: page,
    count: count,
    sort: sort,
    product_id: productId
  };

  return axios.get('/reviews', { params: newParams });
};

RandRAPIcalls.getReviewsMeta = function (productId) {
  let newParams = {
    product_id: productId
  };

  return axios.get('/reviews/meta', { params: newParams});
};

RandRAPIcalls.postHelpfullnessFeedback = function (reviewId, helpful) {
  let feedback = helpful ? 'helpful' : 'report';

  return axios.put('/reviews/feedback', {reviewId, feedback});
};

RandRAPIcalls.postReview = function (object) {
  return axios.post('/reviews', object);
};

RandRAPIcalls.cloudinary = function (formData) {
  return axios.post('/image-upload', formData);
};

export default RandRAPIcalls;

