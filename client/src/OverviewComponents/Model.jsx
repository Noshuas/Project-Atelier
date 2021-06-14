import React, { createContext, useState, useEffect } from 'react';
import { getProductDetails, getProductStyles } from './index.js';
import { getProductReviewsMeta, getProductReviews } from './index.js';
import { getDefaultStyleDetails } from './index.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set helper/storage variables
  let defaultStyleDetails = [];
  let productId = '17067';

  // below state variables are set with API calls
  // user interactions do not update these vars (unless new product is selected)
  const [productDetails, setProductDetails] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [productStarRating, setProductStarRating] = useState(null);
  const [productReviewCount, setProductReviewCount] = useState(null);

  // below state variables contain specific info from above API vars
  // these vars are more dynamic, user interactions will cause state change
  const [currentStyle, setCurrentStyle] = useState({});
  const [heroImage, setHeroImage] = useState({url: '', initialIndex: 0});
  const [carouselLargeImages, setCarouselLargeImages] = useState([]);
  const [carouselSmallImages, setCarouselSmallImages] = useState({images: [], initialIndex: 0});
  const [userSizeAndQuantSelect, setUserSizeAndQuantSelect] = useState({});

  // below state variables are used to update element className values
  const [heroPictureContainerClass, setHeroPictureContainerClass] = useState('hero-picture-container-default');
  const [carouselDisplayClass, setCarouselDisplayClass] = useState('carousel-container-default');
  const [primaryImageDisplayClass, setPrimaryImageDisplayClass] = useState('primary-img-default');
  const [primaryImageWidthClass, setPrimaryImageWidthClass] = useState('primary-img-width-default');
  const [primaryIconDisplayClass, setPrimaryIconDisplayClass] = useState('primary-icons-default');
  const [expandIconDisplayClass, setExpandIconDisplayClass] = useState('expand-icon-default');
  const [detailsDisplayClass, setDetailsDisplayClass] = useState('details-display-default');

  useEffect(() => {
    Promise.all([
      getProductDetails(productId),
      getProductStyles(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, styles, starRatings, totalReviews]) => {
        defaultStyleDetails = getDefaultStyleDetails(styles.data);
        setProductDetails(product.data);
        setProductStyles(styles.data);
        setProductStarRating(starRatings);
        setProductReviewCount(totalReviews);
        setCurrentStyle(defaultStyleDetails);
        setHeroImage({url: defaultStyleDetails.primaryImageURL, initialIndex: 0});
        setCarouselLargeImages(defaultStyleDetails.largePhotoURLs);
        setCarouselSmallImages({
          images: defaultStyleDetails.smallPhotoURLs.slice(0, 4),
          initialIndex: 0
        });
      });
  }, []);

  function getNewProduct(productId) {
    Promise.all([
      getProductDetails(productId),
      getProductStyles(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, styles, starRatings, totalReviews]) => {
        defaultStyleDetails = getDefaultStyleDetails(styles.data);
        setProductDetails(product.data);
        setProductStyles(styles.data);
        setProductStarRating(starRatings);
        setProductReviewCount(totalReviews);
        setCurrentStyle(defaultStyleDetails);
        setHeroImage({url: defaultStyleDetails.primaryImageURL, initialIndex: 0});
        setCarouselLargeImages(defaultStyleDetails.largePhotoURLs);
        setCarouselSmallImages({
          images: defaultStyleDetails.smallPhotoURLs.slice(0, 4),
          initialIndex: 0
        });
      });
  }

  return {
    productDetails, setProductDetails,
    productStyles, setProductStyles,
    productStarRating, setProductStarRating,
    productReviewCount, setProductReviewCount,
    currentStyle, setCurrentStyle,
    heroImage, setHeroImage,
    carouselLargeImages, setCarouselLargeImages,
    carouselSmallImages, setCarouselSmallImages,
    userSizeAndQuantSelect, setUserSizeAndQuantSelect,
    heroPictureContainerClass, setHeroPictureContainerClass,
    carouselDisplayClass, setCarouselDisplayClass,
    primaryImageDisplayClass, setPrimaryImageDisplayClass,
    primaryImageWidthClass, setPrimaryImageWidthClass,
    primaryIconDisplayClass, setPrimaryIconDisplayClass,
    expandIconDisplayClass, setExpandIconDisplayClass,
    detailsDisplayClass, setDetailsDisplayClass,
    getNewProduct
  };
}