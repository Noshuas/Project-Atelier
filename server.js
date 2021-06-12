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
  axios.get(config.url + '/products', config.auth)
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => res.send(err));
});

//Luka's endpoints


//Will's endpoints


//Derek's endpoints
app.get('/qa/questions', (req, res) => {
  console.log(req.query);
  let params = {
    product_id: req.query.productId,
    page: 1,
    count: 50
  };
  let headers = config.auth.headers;
  return axios.get(config.url + '/qa/questions', { params, headers})
    .then(results => {
      //console.log(results.data.results);
      res.send(results.data.results);
    })
    .catch(err => { res.send(err); });

});

app.post('/qa/questions', (req, res) => {
  console.log(req.body);

  let headers = config.auth.headers;
  return axios.post(config.url + '/qa/questions', req.body, { headers })
    .then(results => {
      //console.log(results.data.results);
      res.send(results);
    })
    .catch(err => { res.send(err); });

});

app.get('/qa/answers', (req, res) => {
  //console.log(req.query.question_id);
  let params = {
    question_id: req.query.question_id,
    page: 1,
    count: 50
  };
  let headers = config.auth.headers;
  return axios.get(config.url + `/qa/questions/${req.query.question_id}/answers`, { params, headers })
    .then(results => {
      //console.log(results.data.results);
      res.send(results.data.results);
    })
    .catch(err => { res.send(err); });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

