import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { OverviewContext } from './index.js';
import { iconURLs } from './iconURLs.js';

export function Overview() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  const {productImages, setProductImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);

  return (
    <section className="overview">
      <div className="sale">Site-Wide Annoucement Message - Sale/Discount Offer</div>

      <div className="hero-picture">
        <div className="small-pic-container">
          <div className="small-icon-wrapper">
            <img className="small-icon-top" src={iconURLs.arrowUp}/>
          </div>
          {productImages.map((photoSet, index) => {
            return (
              <div className="small-pic-wrapper" onClick={() => {
                primaryImgURL = url;
              }}>
                <img className="small-img" src={photoSet.thumbnail_url}/>
              </div>);
          }).slice(0, 4)}
          <div className="small-icon-wrapper">
            <img className="small-icon-bottom" src={iconURLs.arrowDown}/>
          </div>
        </div>
        <div className="primary-img-container">
          <img className="small-icon-left" src={iconURLs.arrowLeft}/>
          <img className="primary-img" src={heroImage.url}/>
          <img className="small-icon-right" src={iconURLs.arrowRight} onClick={() => {
            setHeroImage(cur => {
              let nextIndex = cur.index + 1;
              console.log(nextIndex, productImages.length);
              if (nextIndex === productImages.length) {
                nextIndex = 0;
              }
              return {
                url: productImages[nextIndex].url,
                index: nextIndex
              };
            });
          }}/>
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