import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
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
        {/* <Ratings /> // Luka className="lk rating-overview" */}
      </div>
    );
  }
}

axios.get(API.url + '/qa/questions?product_id=17067', API.auth)
  .then(resVal => {
    console.log(resVal);
    //return resVal;
  })
  .catch(err => console.log(err));

fetch(API.url + '/products', API.auth)
  .then(response => response.json())
  .then(data => console.log(data));

fetch(API.url + '/qa/questions?product_id=17067', API.auth)
  .then(response => response.json())
  .then(data => console.log(data));

ReactDOM.render(<App />, document.getElementById('app'));

// var test = 55;
// export default test;