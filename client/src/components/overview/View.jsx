import React, { useContext } from 'react';
import { AppContext } from '../app/index.js';
import { OverviewContext } from './index.js';

export function Overview() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  const {productImages, setProductImages} = useContext(OverviewContext);

  let primaryImgURL;

  if (productStyles.results) {
    primaryImgURL = productStyles.results[0].photos[0].url;
  } else {
    primaryImgURL = '';
  }

  return (
    <section className="overview">
      <div className="sale">Site-Wide Annoucement Message - Sale/Discount Offer</div>

      <div className="hero-picture">
        <div className="small-pic-container">
          <div className="small-icon-wrapper">
            <img className="small-icon-top" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"/>
          </div>
          {productImages.map((url, index) => {
            return (
              <div className="small-pic-wrapper" onClick={() => {
                primaryImgURL = url;
              }}>
                <img className="small-img" src={url}/>
              </div>);
          }).slice(0, 4)}
          <div className="small-icon-wrapper">
            <img className="small-icon-bottom" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png"/>
          </div>
        </div>
        <div className="primary-img-container">
          <img className="small-icon-left" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-512.png"/>
          <img className="primary-img" src={primaryImgURL}/>
          <img className="small-icon-right" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
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
          console.log(productStyles);
        }}>+</button>
        <div className="size-quantity-container">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="add-to-cart-container">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <div className="description">
        <div>{currentProduct.slogan || 'Loading'}</div>
        <div>{currentProduct.description || 'Loading'}</div>
      </div>
    </section>
  );
}