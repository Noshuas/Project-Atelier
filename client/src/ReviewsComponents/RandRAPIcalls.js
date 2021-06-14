import axios from 'axios';
import React from 'react';

let serverURL = 'http://localhost:3000';

let RandRAPIcalls = {};

RandRAPIcalls.getProducts = function () {
  return axios.get(serverURL + '/products');
};

RandRAPIcalls.getReviews = function (productId, sort = 'relevant', count = 2, page = 1) {
  let newParams = {
    page: page,
    count: count,
    sort: sort,
    product_id: productId
  };

  return axios.get(serverURL + '/reviews', { params: newParams });
};

RandRAPIcalls.getReviewsMeta = function (productId) {
  let newParams = {
    product_id: productId
  };

  return axios.get(serverURL + '/reviews/meta', { params: newParams});
};

RandRAPIcalls.postHelpfullnessFeedback = function (reviewId, helpful) {
  let feedback = helpful ? 'helpful' : 'report';

  return axios.put(serverURL + '/reviews/feedback', {reviewId, feedback});
};

RandRAPIcalls.postReview = function (object) {
  return axios.post(serverURL + '/reviews', object);
};

RandRAPIcalls.cloudinary = function (formData) {
  return axios.post(serverURL + '/image-upload', formData);
};

export default RandRAPIcalls;

