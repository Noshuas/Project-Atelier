import React, { createContext, useState, useEffect } from 'react';
import { getProducts, getProductStyles } from './index.js';
import { getProductReviewsMeta, getProductReviews } from './index.js';
import { createDefaultStyle } from './index.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set helper/storage variables
  let defaultStyle = [];
  let productId = '17067';

  // set initial state values (static)
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStarRatings, setProductStarRatings] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  const [productStyles, setProductStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [userSelections, setUserSelections] = useState({});
  const [carouselLargeImages, setCarouselLargeImages] = useState([]);
  const [carouselSmallImages, setCarouselSmallImages] = useState({images: [], initialIndex: 0});
  const [heroImage, setHeroImage] = useState({url: '', index: 0});
  const [heroPictureContainerClass, setHeroPictureContainerClass] = useState('hero-picture-container-default');
  const [carouselDisplayClass, setCarouselDisplayClass] = useState('carousel-container-default');
  const [primaryImageDisplayClass, setPrimaryImageDisplayClass] = useState('primary-img-default');
  const [primaryImageWidthClass, setPrimaryImageWidthClass] = useState('primary-img-width-default');
  const [primaryIconDisplayClass, setPrimaryIconDisplayClass] = useState('primary-icons-default');
  const [expandIconDisplayClass, setExpandIconDisplayClass] = useState('expand-icon-default');
  const [detailsDisplayClass, setDetailsDisplayClass] = useState('details-display-default');

  useEffect(() => {
    Promise.all([
      getProducts(productId),
      getProductStyles(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, styles, starRatings, totalReviews]) => {
        defaultStyle = createDefaultStyle(styles.data);
        setCurrentProduct(product.data);
        setProductStarRatings(starRatings);
        setReviewCount(totalReviews);
        setProductStyles(styles.data);
        setCurrentStyle(defaultStyle);
        setHeroImage(defaultStyle.primaryImage);
        setCarouselLargeImages(defaultStyle.photoInfo);
        setCarouselSmallImages({
          images: defaultStyle.photoInfo.slice(0, 4),
          initialIndex: 0
        });
      });
  }, []);

  function getNewProduct(productId) {
    Promise.all([
      getProducts(productId),
      getProductStyles(productId),
      getProductReviewsMeta(productId),
      getProductReviews(productId)])
      .then(([product, styles, starRatings, totalReviews]) => {
        defaultStyle = createDefaultStyle(styles.data);
        setCurrentProduct(product.data);
        setProductStarRatings(starRatings);
        setReviewCount(totalReviews);
        setProductStyles(styles.data);
        setCurrentStyle(defaultStyle);
        setHeroImage(defaultStyle.primaryImage);
        setCarouselLargeImages(defaultStyle.photoInfo);
        setCarouselSmallImages({
          images: defaultStyle.photoInfo.slice(0, 4),
          initialIndex: 0
        });
      });
  }

  return {
    currentProduct, setCurrentProduct,
    productStarRatings, setProductStarRatings,
    reviewCount, setReviewCount,
    productStyles, setProductStyles,
    currentStyle, setCurrentStyle,
    userSelections, setUserSelections,
    carouselLargeImages, setCarouselLargeImages,
    carouselSmallImages, setCarouselSmallImages,
    heroImage, setHeroImage,
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