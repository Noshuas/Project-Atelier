import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import RandR from './ReviewsComponents/RandR.jsx';
import APIcalls from './ReviewsComponents/APIcalls.js';
import QandA from './QandAComponents/QandA.jsx';

function App() {

  // Dereks Hooks

  // Lukas Hooks
  const [productId, setProduct] = useState(0);
  useEffect(() => {
    APIcalls.getProducts()
      .then(response => setProduct(response.data[3].id));
  }, []);


  // Wills Hooks

  return (
    <div id="main">
      {/* <Overview /> // Will
      <Related /> // Team */}
      <QandA />
      <RandR productId={productId}/>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
