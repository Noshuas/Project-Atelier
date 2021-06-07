// Dependency Imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import { Overview } from './components/overview/View.jsx';
import { Related } from './components/related/View.jsx';
import QandA from './QandAComponents/QandA.jsx';
import RandR from './ReviewsComponents/RandR.jsx';
import RandRAPIcalls from './ReviewsComponents/RandRAPIcalls.js';

// Context and Custom Hook Imports
import { AppContext, useApp } from './components/app/index.js';
import { OverviewContext, useOverview } from './components/overview/index.js';
import { RelatedContext, useRelated } from './components/related/index.js';

function App() {

  // Parent Hooks
  const appState = useApp();

  // Dereks Hooks

  // Lukas Hooks
  const [productId, setProduct] = useState(0);
  useEffect(() => {
    RandRAPIcalls.getProducts()
      .then(response => setProduct(response.data[3].id));
  }, []);

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
      <RandR productId={productId} />
    </AppContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
