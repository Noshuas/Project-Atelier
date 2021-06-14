import React, { createContext, useState, useEffect } from 'react';
import { getProductDetails, getProductReviewsMeta, getProductReviews } from '../index.js';

export const OverviewContext = createContext();

export function useOverview() {
  console.log('model');
  // set helper/storage variables
  let defaultStyleDetails = [];
  let productId = '17067';

  // below state variables are set with API calls
  // user interactions do not update these vars (unless new product is selected)
  const [productDetails, setProductDetails] = useState({});
  const [productStarRating, setProductStarRating] = useState(null);
  const [productReviewCount, setProductReviewCount] = useState(null);

  useEffect(() => {
    Promise.all([
      getProductDetails(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, starRatings, totalReviews]) => {
        setProductDetails(product.data);
        setProductStarRating(starRatings);
        setProductReviewCount(totalReviews);
      });
  }, []);

  function getNewProduct(productId) {
    Promise.all([
      getProductDetails(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, starRatings, totalReviews]) => {
        setProductDetails(product.data);
        setProductStarRating(starRatings);
        setProductReviewCount(totalReviews);
      });
  }

  return {
    productDetails, setProductDetails,
    productStarRating, setProductStarRating,
    productReviewCount, setProductReviewCount,
    getNewProduct
  };
}