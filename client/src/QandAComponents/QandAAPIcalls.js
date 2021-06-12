import axios from 'axios';
import API from '../configAPI.js';

let QAapiCalls = {};

let serverURL = 'http://localhost:3000';

QAapiCalls.getQuestions = (productID) => {
  let params = {
    productId: productID
  };
  return axios.get(serverURL + '/qa/questions', { params })
    .then(results => {
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

};

QAapiCalls.getAnswers = (questionID) => {
  let params = {
    question_id: questionID,
  };
  //let headers = API.auth.headers;
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
  //et headers = API.auth.headers;

  return axios.post(serverURL + '/qa/questions', data)
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
