import React, { createContext, useState, useEffect } from 'react';
import { getProductDetails, getProductReviewsMeta, getProductReviews } from './index.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set helper/storage variables
  let defaultStyleDetails = [];
  let productId = '17067';

  // below state variables are set with API calls
  // user interactions do not update these vars (unless new product is selected)
  const [productDetails, setProductDetails] = useState({});
  const [productStarRating, setProductStarRating] = useState(null);
  const [productReviewCount, setProductReviewCount] = useState(null);
  const [userSizeAndQuantSelect, setUserSizeAndQuantSelect] = useState({});

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

  return {
    productDetails, setProductDetails,
    productStarRating, setProductStarRating,
    productReviewCount, setProductReviewCount,
    userSizeAndQuantSelect, setUserSizeAndQuantSelect
  };
}