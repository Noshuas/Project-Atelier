import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';

const App = () => {
  console.log(API);
  axios.get(API.url + '/products', API.auth)
    .then(resVal => {
      console.log(resVal);
    });
  return (
    <div className="main">
      <div>Hello World</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));