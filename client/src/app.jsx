// Dependency Imports
import React from 'react';
import ReactDOM from 'react-dom';
import API from './configAPI.js';
import axios from 'axios';

// Component Imports
import { Overview } from './components/overview/View.jsx';
import { Related } from './components/related/View.jsx';
import QandA from './QandAComponents/QandA.jsx';
import Ratings from './components/ratings/Ratings.jsx';
import APIcalls from './components/ratings/APIcalls.js';

// Context and Custom Hook Imports
import { AppContext, useApp } from './components/app/index.js';
import { OverviewContext, useOverview } from './components/overview/index.js';
import { RelatedContext, useRelated } from './components/related/index.js';



function App() {

  // Parent Hooks
  const appState = useApp();

  // Dereks Hooks

  // Lukas Hooks

  // Wills Hooks
  const overviewState = useOverview();

  // Related Hooks
  const relatedState = useRelated();


  // Luka's Methods
  // method1 () {}

  //Derek's Methods
  // method2 () {}

  //Will's Methods
  // method3 () {}


  return (
    <AppContext.Provider value={appState}>
      <OverviewContext.Provider value={overviewState}>
        <Overview />
      </OverviewContext.Provider>
      <RelatedContext.Provider value={relatedState}>
        <Related />
      </RelatedContext.Provider>
      <QandA />
      <Ratings />
    </AppContext.Provider>
  );
}

// axios.get(API.url + '/cart', API.auth)
//   .then(resVal => {
//     console.log(resVal);
//   });

ReactDOM.render(<App />, document.getElementById('app'));

// var test = 55;
// export default test;