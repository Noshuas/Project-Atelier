import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
// import APIrequest from './APIrequests.js';

//multiple seperation-of-concern files

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

  //Derek' Methods
  // method2 () {}

  //Will's Methods
  // method3 () {}

  render () {
    return (
      <div id="main">
        <Overview /> // Will
        <Related /> // Team
        <QandA /> // Derek
        <Ratings /> // Luka className="lk rating-overview"
      </div>
    );
  }
}

// axios.get(API.url + '/products', API.auth)
//   .then(resVal => {
//     console.log(resVal);
//   });


ReactDOM.render(<App />, document.getElementById('app'));