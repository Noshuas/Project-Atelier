import axios from 'axios';
import React from 'react';
import API from '../configAPI.js';


let APIcalls = {};


fetch(API.url + '/products', API.auth)
  .then(response => response.json())
  .then(data => console.log(data));

export default APIcalls;