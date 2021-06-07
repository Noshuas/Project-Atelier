import axios from 'axios';
import React from 'react';
import API from '../configAPI.js';


let RandRAPIcalls = {};


RandRAPIcalls.getProducts = function () {
  return axios.get(API.url + '/products', API.auth);
};

RandRAPIcalls.getReviews = function (productId, sort = 'relevant', page = 1, count = 5) {
  let newParams = {
    page: page,
    count: count,
    sort: sort,
    product_id: productId
  };

  return axios.get(API.url + '/reviews', {params: newParams, headers: API.auth.headers});
};

RandRAPIcalls.getReviewsMeta = function (productId) {
  let newParams = {
    product_id: productId
  };

  return axios.get(API.url + '/reviews/meta', {params: newParams, headers: API.auth.headers});
};

export default RandRAPIcalls;