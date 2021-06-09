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
  console.log(data);
  //console.log({data, headers});
  // return axios({
  //   method: 'POST',
  // })
  return axios.post(API.url + '/qa/questions', data, { headers })
    .then(results => {
      console.log('Success', results);
      //return results.data.results;
    })
    .catch(err => { return console.log(err); });
};
export default QAapiCalls;
