import axios from 'axios';
import API from '../../configAPI.js';


let APIcalls = {};

APIcalls.get = axios.get(API.url + '/products', API.auth)
  .then(resVal => {
    console.log(resVal);
  });

export default APIcalls;