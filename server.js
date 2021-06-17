const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('./configAPI.js');
const formData = require('express-form-data');
const cloudinary = require('cloudinary');
const compression = require('compression');


const app = express();
const port = 3000;
cloudinary.config(config.cloudinaryCreds);

app.use(compression());
app.use(express.static('./client/dist'));
app.use(express.json());
app.use(formData.parse());


app.get('/products', (req, res) => {
  console.log('Getting list of products...');
  let params = req.query;
  axios.get(config.url + '/products', config.auth)
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => res.send(err));
});

app.post('/interactions', (req, res) => {
  console.log('Posting an interaction');
  let params = req.body;
  axios.post(config.url + '/interactions', params, config.auth)
    .then(() => res.end());
});

//Luka's endpoints
app.get('/reviews', (req, res) => {
  console.log('Getting reviews...');
  let params = req.query;
  axios.get(config.url + '/reviews', { params, ...config.auth })
    .then(response => res.send(response.data));
});

app.get('/reviews/meta', (req, res) => {
  console.log('Getting review metadata...');
  let params = req.query;
  axios.get(config.url + '/reviews/meta', { params, ...config.auth })
    .then(response => res.send(response.data));
});

app.put('/reviews/feedback', (req, res) => {
  console.log('Putting report feedback...');
  let params = req.body;
  axios.put(config.url + '/reviews/' + params.reviewId + '/' + params.feedback, {}, config.auth)
    .then(() => res.end());
});

app.post('/reviews', (req, res) => {
  console.log('Posting a new review...');
  let params = req.body;
  axios.post(config.url + '/reviews', params, config.auth)
    .then(() => res.end());
});

app.post('/image-upload', (req, res) => {
  console.log('Uploading images...');
  let values = Object.values(req.files);

  if (Array.isArray(values[0])) {
    console.log('-------------TRANSFORMING----------------');
    values = values[0];
  }

  console.log(values);

  const promises = values.map(image => cloudinary.uploader.upload(image.path));

  Promise
    .all(promises)
    .then(results => res.json(results));
});

//Will's endpoints


//Derek's endpoints
app.get('/qa/questions', (req, res) => {
  console.log('Getting questions');
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
  //console.log(req.body);

  let headers = config.auth.headers;
  return axios.post(config.url + '/qa/questions', req.body, { headers })
    .then(results => {
      //console.log(results.data.results);
      res.send(results);
    })
    .catch(err => { res.send(err); });

});

app.get('/qa/answers', (req, res) => {
  console.log('Getting answers');
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

app.post('/qa/answers', (req, res) => {
  console.log(req.query);
  let params = {
    question_id: req.query.question_id
  };
  let headers = config.auth.headers;
  return axios.post(config.url + `/qa/questions/${req.query.question_id}/answers`, req.body, { params, headers })
    .then(results => {
      //console.log(results.data.results);
      res.send(results);
    })
    .catch(err => { res.send(err); });

});

app.put('/qa/helpfulness', (req, res) => {
  // all in body
  //console.log(req.body);
  let headers = config.auth.headers;
  let url = `/qa/${req.body.QorA}/${req.body.ID}/${req.body.feeback}`;
  if (req.body.QorA === 'question') {
    return axios.put(config.url + url, {question_id: req.body.ID}, {headers})
      .then(results => {
        //console.log(results.data.results);
        res.send(results);
      })
      .catch(err => { res.send(err); });
  } else {
    return axios.put(config.url + url, {answer_id: req.body.ID}, {headers})
      .then(results => {
        res.send(results);
      })
      .catch(err => { res.send(err); });
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

