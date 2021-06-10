import axios from 'axios';
import API from '../configAPI.js';

let QAapiCalls = {};

QAapiCalls.getQuestions = (productID) => {

  let params = {
    product_id: productID,
    page: 1,
    count: 25
  };
  let headers = API.auth.headers;
  return axios.get(API.url + '/qa/questions', { params, headers})
    .then(results => {
      //console.log(results.data.results);
      return results.data.results;
    })
    .catch(err => { return console.log(err); });

};

QAapiCalls.getAnswers = (questionID) => {
  let params = {
    question_id: questionID,
    page: 1,
    count: 25
  };
  let headers = API.auth.headers;
  return axios.get(API.url + `/qa/questions/${questionID}/answers`, { params, headers})
    .then(results => {
      //console.log(results.data.results);
      return results.data.results;
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
  let headers = API.auth.headers;

  return axios.post(API.url + '/qa/questions', data, { headers })
    .then(results => {
      console.log('Success', results);
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postAnswer = (info, questionId) => {
  console.log(info, questionId);
  let data = {
    body: info.answer,
    name: info.nickname,
    email: info.email
  };
  console.log(data);
  let headers = API.auth.headers;

  return axios.post(API.url + `/qa/questions/${questionId}/answers`, data, { headers })
    .then(results => {
      console.log('Success', results);
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postHelpfullnessFeedback = function (QorA, ID, feeback) {

  let url = `/qa/${QorA}/${ID}/${feeback}`;
  let headers = API.auth.headers;
  if (QorA === 'question') {
    return axios.put(API.url + url, {question_id: ID}, {headers});
  } else {
    return axios.put(API.url + url, {answer_id: ID}, {headers});
  }
};


export default QAapiCalls;
