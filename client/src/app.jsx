import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
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
        {/* <Overview /> // Will */}
        {/* <Related /> // Team */}
        <QandA />
        <Ratings />

      </div>
    );
  }
}

// axios.get(API.url + '/cart', API.auth)
//   .then(resVal => {
//     console.log(resVal);
//   });

ReactDOM.render(<App />, document.getElementById('app'));

// var test = 55;
// export default test;