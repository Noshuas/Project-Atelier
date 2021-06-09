import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function ProductDescription() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);

  return (
    <>
      <div className="full-description-wrapper">
        <div className="title">{currentProduct.slogan || 'Loading'}</div>
        <div className="product-description">{currentProduct.description || 'Loading'}</div>
      </div>
      <div className="product-extras-wrapper">
        <div className="product-extra">✓ GMO and Pesticide-free</div>
        <div className="product-extra">✓ Made with 100% Genetic Modification</div>
        <div className="product-extra">✓ This is made up</div>
        <div className="product-extra">✓ It doesn't matter</div>
      </div>
    </>
  );
}