import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { OverviewContext } from './index.js';
import { HeroImage, SmallCarousel } from './index.js';

export function Overview() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  const {productImages, setProductImages} = useContext(OverviewContext);

  return (
    <section className="overview">
      <div className="sale">Site-Wide Annoucement Message - Sale/Discount Offer</div>

      <div className="hero-picture">
        <SmallCarousel />
        <HeroImage />
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