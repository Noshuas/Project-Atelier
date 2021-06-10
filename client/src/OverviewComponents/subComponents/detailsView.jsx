import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function ProductDetails() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);

  return (
    <>
      <div>Star Rating</div>
      <div className="product-category">Category: {currentProduct.category || 'Loading'}</div>
      <div className="product-title">{currentProduct.name || 'Loading'}</div>
      <div className="product-price">${currentProduct.default_price || 'Loading'}</div>
    </>
  );
}