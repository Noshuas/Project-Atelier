import React, { useContext } from 'react';
import { OverviewContext, CurrentStyleContext } from '../index.js';
import ReadOnlyRatingStars from '../../ReviewsComponents/ReadOnlyRatingStars.jsx';

export function ProductDetails() {
  const { productDetails,
    productStarRating,
    productReviewCount
  } = useContext(OverviewContext);

  const { currentStyle } = useContext(CurrentStyleContext);

  let productCategory = '';
  let stylePrice = currentStyle.originalPrice;

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
      <div className="ratings-container">
        <ReadOnlyRatingStars rating={productStarRating}/>
        <div className="review-count">
          <a className="review-count-link" href="#ratings-and-reviews">Read all {productReviewCount} reviews</a>
        </div>
      </div>
      <div className="product-category">CATEGORY: {productCategory || 'Loading'}</div>
      <div className="product-title">{productDetails.name || 'Loading'}</div>
      <div className="product-price">${stylePrice || 'Loading'}</div>
    </>
  );
}