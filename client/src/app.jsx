import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import Overview from './components/overview/Model.jsx';
import Ratings from './components/ratings/Ratings.jsx';
import APIcalls from './components/ratings/APIcalls.js';
// import overviewControl from './components/overviewControl.js';
// etc. (do we add configAPI.js to controllers or to app.jsx?)
// Q+A import
import QandA from './QandAComponents/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Derek's State Props
      // QandAData: [],

      // Luka's State Props
      // RatingData: [],

      // Will's State Props
      // ProductData: [],
    };

    // Derek's Binds
    // Luka's Binds
    // Will's Binds
  }

  // Luka's Methods
  // method1 () {}

  //Derek's Methods
  // method2 () {}

  //Will's Methods
  // method3 () {}

  render () {
    return (
      <div id="main">
        <Overview /> // Will
        <Related /> // Team
        <QandA />
        <Ratings />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// var test = 55;
// export default test;

{ /* <div id="main">
  <Overview /> // Will
  <Related /> // Team
  <QandA /> // Derek
  <Ratings /> // Luka
</div> */ }

// axios.get(API.url + '/products', API.auth)
// axios.get(API.url + '/cart', API.auth)
//   .then(resVal => {
//     console.log(resVal.data);
//   });

// fetch(API.url + '/products', API.auth)
//   .then(response => response.json())
//   .then(data => console.log(data));