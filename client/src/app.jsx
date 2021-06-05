import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import Ratings from './ReviewsComponents/Ratings.jsx';
import APIcalls from './ReviewsComponents/APIcalls.js';
import QandA from './QandAComponents/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
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
