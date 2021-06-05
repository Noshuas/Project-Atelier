import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import RandR from './ReviewsComponents/Ratings.jsx';
import APIcalls from './ReviewsComponents/APIcalls.js';
import QandA from './QandAComponents/QandA.jsx';

function App() {

  // Dereks Hooks

  // Lukas Hooks

  // Wills Hooks

  return (
    <div id="main">
      {/* <Overview /> // Will
      <Related /> // Team */}
      <QandA />
      <RandR />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
