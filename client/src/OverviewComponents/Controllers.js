import API from '../configAPI.js';
import axios from 'axios';

export function getProducts() {
  return axios.get(API.url + '/products/17067', API.auth);
}

export function getProductStyles() {
  return axios.get(API.url + '/products/17067/styles', API.auth);
}