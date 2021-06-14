import React, { useContext } from 'react';
import { OverviewContext, createStars } from '../index.js';

export function ProductDetails() {
  const { productDetails } = useContext(OverviewContext);
  const { currentStyle } = useContext(OverviewContext);
  const { productStarRating } = useContext(OverviewContext);
  const { productReviewCount } = useContext(OverviewContext);

  let starContainer = [];
  let productCategory = '';
  let stylePrice = currentStyle.originalPrice;

  if (productStarRating) {
    starContainer = createStars(productStarRating);
  }

  if (productDetails.category) {
    productCategory = productDetails.category.toUpperCase();
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
          <a className="review-count-link" href="">Read all {productReviewCount} reviews</a>
        </div>
      </div>
      <div className="product-category">CATEGORY: {productCategory || 'Loading'}</div>
      <div className="product-title">{productDetails.name || 'Loading'}</div>
      <div className="product-price">${stylePrice || 'Loading'}</div>
    </>
  );
}