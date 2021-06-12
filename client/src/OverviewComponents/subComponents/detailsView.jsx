import React, { useContext } from 'react';
import { OverviewContext, createStars } from '../index.js';

export function ProductDetails() {
  const {productDetails, setProductDetails} = useContext(OverviewContext);
  const {currentStyle, setCurrentStyle} = useContext(OverviewContext);
  const {productStarRating, setProductStarRating} = useContext(OverviewContext);
  const {productReviewCount, setProductReviewCount} = useContext(OverviewContext);

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