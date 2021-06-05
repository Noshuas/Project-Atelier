import axios from 'axios';
import React from 'react';
import API from '../configAPI.js';


let APIcalls = {};


APIcalls.getProducts = axios.get(API.url + '/products', API.auth);

APIcalls.getReviews = function (productId, sort = 'relevance', page = 1, count = 1) {
  let newParams = {
    page: page,
    count: count,
    sort: sort,
    product_id: productId
  };

  return axios.get(API.url + '/reviews', {params: newParams, headers: API.auth.headers});
};

export default APIcalls;