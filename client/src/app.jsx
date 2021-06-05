import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import Ratings from './components/ratings/Ratings.jsx';
import APIcalls from './components/ratings/APIcalls.js';
import Overview from './components/overview/Model.jsx';
import Related from './components/related/Model.jsx';
// import overviewControl from './components/overviewControl.js';
// etc. (do we add configAPI.js to controllers or to app.jsx?)
// Q+A import
import QandA from './QandAComponents/QandA.jsx';

function App() {

  // Dereks Hooks

  // Lukas Hooks

  // Wills Hooks


  // Luka's Methods
  // method1 () {}

  //Derek's Methods
  // method2 () {}

  //Will's Methods
  // method3 () {}


  return (
    <div id="main">
      <Overview />
      <Related />
      <QandA />
      <Ratings />
    </div>
  );
}

// axios.get(API.url + '/cart', API.auth)
//   .then(resVal => {
//     console.log(resVal);
//   });

ReactDOM.render(<App />, document.getElementById('app'));

// var test = 55;
// export default test;