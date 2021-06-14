import axios from 'axios';

let QAapiCalls = {};

let serverURL = 'http://localhost:3000';
<<<<<<< HEAD

QAapiCalls.getQuestions = (productID) => {
=======
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5

QAapiCalls.getQuestions = (productID) => {
  let params = {
    productId: productID
  };
<<<<<<< HEAD

  return axios.get(serverURL + '/qa/questions', { params })
    .then(results => {
      //console.log(results.data.results);
=======
  return axios.get(serverURL + '/qa/questions', { params })
    .then(results => {
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

};

QAapiCalls.getAnswers = (questionID) => {
  let params = {
    question_id: questionID,
<<<<<<< HEAD

  };

=======
  };
  //let headers = API.auth.headers;
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
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
<<<<<<< HEAD
  //let headers = API.auth.headers;
=======
  //et headers = API.auth.headers;
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5

  return axios.post(serverURL + '/qa/questions', data)
    .then(results => {
      console.log('Success');
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postAnswer = (info, question_id) => {
<<<<<<< HEAD
  //console.log(info, questionId);
=======
  console.log(info, question_id);
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
  let data = {
    body: info.answer,
    name: info.nickname,
    email: info.email
  };
  let params = {
    question_id: question_id
  };
<<<<<<< HEAD
  // console.log(data);
  // let headers = API.auth.headers;
=======
  //console.log(data);
  //let headers = API.auth.headers;
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5

  return axios.post(serverURL + '/qa/answers', data, { params })
    .then(results => {
      console.log('Success', results);
    })
    .catch(err => { return console.log(err); });
};

QAapiCalls.postHelpfullnessFeedback = function (QorA, ID, feeback) {

<<<<<<< HEAD
  // let url = `/qa/${QorA}/${ID}/${feeback}`;
  // let headers = API.auth.headers;
  return axios.put(serverURL + '/qa/helpfulness', {QorA, ID, feeback});

=======
  //let url = `/qa/${QorA}/${ID}/${feeback}`;
  //let headers = API.auth.headers;
  return axios.put(serverURL + '/qa/helpfulness', {QorA, ID, feeback});
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
};


export default QAapiCalls;
