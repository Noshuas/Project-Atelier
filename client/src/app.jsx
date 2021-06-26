// Dependency imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// Component Imports
import { Overview } from './OverviewComponents/View.jsx';
import { Related } from './RelatedComponents/View.jsx';
import QandA from './QandAComponents/QandA.jsx';
import RandR from './ReviewsComponents/RandR.jsx';
import RandRAPIcalls from './ReviewsComponents/RandRAPIcalls.js';
// Context and Custom Hook Imports
import { AppContext, useApp } from './AppComponents/index.js';
import { ProductContext, useProduct } from './OverviewComponents/index.js';
import { StyleContext, useStyle } from './OverviewComponents/index.js';
import { RelatedContext, useRelated } from './RelatedComponents/index.js';

function App() {

  // Parent Hooks
  const appState = useApp();

  // Dereks Hooks

  // Lukas Hooks
  const [productId, setProduct] = useState('0');
  const [productName, setProductName] = useState('');
  useEffect(() => {
    RandRAPIcalls.getProducts()
      .then(response => {
        setProduct(response.data[2].id);
        setProductName(response.data[2].name);
      })
      .catch(err => console.log('err', err));
  }, []);

  // Wills Hooks
  const productState = useProduct();
  const styleState = useStyle();

  // Related Hooks
  const relatedState = useRelated();

  useEffect(() => {
    document.body.style.backgroundColor = appState.theme.body;
    document.body.style.color = appState.theme.text;
  }, [appState.theme]);

  return (
    <AppContext.Provider value={appState}>
      <ProductContext.Provider value={productState}>
        <StyleContext.Provider value={styleState}>
          <Overview />
        </StyleContext.Provider>
      </ProductContext.Provider>
      <QandA productId={productId} productName={productName} />
      <RandR productId={productId} productName={productName} />
      <button id="switch-theme" onClick={() => appState.toggleTheme()}>TOGGLE THEME</button>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
