const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('./configAPI.js');

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log('Getting list of products...');
  let params = req.query;
  axios.get(config.url + '/products', { params, ...config.auth})
    .then((response) => res.send(response.data));
});

//Luka's endpoints


//Will's endpoints


//Derek's endpoints



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

