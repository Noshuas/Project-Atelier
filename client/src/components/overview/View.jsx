import React, { useContext } from 'react';
import { AppContext } from '../app/index.js';
import { OverviewContext } from './index.js';

export function Overview() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  let primaryImgURL;

  if (productStyles.results) {
    primaryImgURL = productStyles.results[0].photos[0].url;
  } else {
    primaryImgURL = '';
  }

  return (
    <section className="overview">
      <div className="sale">Site-Wide Annoucement Message - Sale/Discount Offer</div>
      <div className="picture">
        <img src={primaryImgURL} />
        <div className="small-pic-container">
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
        </div>
      </div>
      <div className="details">
        <div>Star Rating</div>
        <div>{currentProduct.category || 'Loading'}</div>
        <div>{currentProduct.name || 'Loading'}</div>
        <div>{currentProduct.default_price || 'Loading'}</div>
        <div>Style</div>
        <div>Cart Selectors</div>
        <button onClick={() => {
          console.log(currentProduct);
        }}>+</button>
      </div>
      <div className="description">
        <div>{currentProduct.slogan || 'Loading'}</div>
        <div>{currentProduct.description || 'Loading'}</div>
      </div>
    </section>
  );
}