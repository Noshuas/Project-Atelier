import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext, createStars } from '../index.js';
import RatingStars from '../../ReviewsComponents/RatingStars.jsx';

export function ProductDetails() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);
  const {currentStyle, setCurrentStyle} = useContext(OverviewContext);
  const {productStarRatings, setProductStarRatings} = useContext(OverviewContext);
  const {reviewCount, setReviewCount} = useContext(OverviewContext);

  let starContainer = [];
  let productCategory = '';
  let stylePrice = currentStyle.originalPrice;

  if (productStarRatings) {
    starContainer = createStars(productStarRatings);
  }

  if (currentProduct.category) {
    productCategory = currentProduct.category.toUpperCase();
  }

  if (currentStyle.salePrice) {
    stylePrice = (
      <>
        <s>{currentStyle.originalPrice}</s>
        <span className="sale-price">${currentStyle.salePrice}</span>
      </>
    );
  }

  return (
    <>
      <div className="star-container">
        {starContainer}
        <div className="review-count">
          <a className="review-count-link" href="">Read all {reviewCount} reviews</a>
        </div>
      </div>
      <div className="product-category">CATEGORY: {productCategory || 'Loading'}</div>
      <div className="product-title">{currentProduct.name || 'Loading'}</div>
      <div className="product-price">${stylePrice || 'Loading'}</div>
    </>
  );
}