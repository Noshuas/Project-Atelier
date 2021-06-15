import axios from 'axios';
import API from '../../../configAPI.js';

let QAapiCalls = {};

let serverURL = 'http://localhost:3000';

QAapiCalls.getQuestions = (productID) => {
  let params = {
    productId: productID
  };

  return axios.get(serverURL + '/qa/questions', { params })
    .then(results => {
      //console.log(results.data.results);
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

};

QAapiCalls.getAnswers = (questionID) => {
  let params = {
    question_id: questionID,

  };

  return axios.get(serverURL + '/qa/answers', { params })
    .then(results => {
      //console.log(results.data.results);
      return results.data;
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postQuestion = (info, productID) => {
  let data = {
    product_id: productID,
    body: info.question,
    name: info.nickname,
    email: info.email
  };
  //let headers = API.auth.headers;

  return axios.post(serverURL + '/qa/questions', data)
    .then(results => {
      console.log('Success');
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postAnswer = (info, question_id) => {
  //console.log(info, questionId);
  let data = {
    body: info.answer,
    name: info.nickname,
    email: info.email
  };
  let params = {
    question_id: question_id
  };
  // console.log(data);
  // let headers = API.auth.headers;

  return axios.post(serverURL + '/qa/answers', data, { params })
    .then(results => {
      console.log('Success', results);
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postHelpfullnessFeedback = function (QorA, ID, feeback) {

  // let url = `/qa/${QorA}/${ID}/${feeback}`;
  // let headers = API.auth.headers;
  return axios.put(serverURL + '/qa/helpfulness', {QorA, ID, feeback});

};


export default QAapiCalls;
