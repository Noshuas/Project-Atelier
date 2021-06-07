import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';
import RandR from './ReviewsComponents/RandR.jsx';
import RandRAPIcalls from './ReviewsComponents/RandRAPIcalls.js';
import Overview from './components/overview/Model.jsx';
import Related from './components/related/Model.jsx';
// import overviewControl from './components/overviewControl.js';
// etc. (do we add configAPI.js to controllers or to app.jsx?)
// Q+A import
import QandA from './QandAComponents/QandA.jsx';

function App() {

  // Dereks Hooks

  // Lukas Hooks
  const [productId, setProduct] = useState(0);
  useEffect(() => {
    RandRAPIcalls.getProducts()
      .then(response => setProduct(response.data[1].id));
  }, []);


  // Wills Hooks

  return (
    <div id="main">
      <Overview />
      <Related />
      <QandA />
      <RandR productId={productId} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
