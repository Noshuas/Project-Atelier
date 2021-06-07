import axios from 'axios';
import API from '../../configAPI.js';


let APIcalls = {};

APIcalls.getProducts = function () {
  return axios.get(API.url + '/products', API.auth);
};

export default APIcalls;