import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';

export function ProductDescription() {
  const { productDetails } = useContext(OverviewContext);

  return (
    <>
      <div className="full-description-wrapper">
        <div className="title">{productDetails.slogan || 'Loading'}</div>
        <div className="product-description">{productDetails.description || 'Loading'}</div>
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