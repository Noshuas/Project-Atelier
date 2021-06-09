import React, { createContext, useState, useEffect } from 'react';
import { getProducts, getProductStyles } from './index.js';
import { createDefaultStyle } from './index.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set helper/storage variables
  let defaultStyle = [];

  // set initial state values (static)
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({name: '', originalPrice: ''});
  const [carouselLargeImages, setCarouselLargeImages] = useState([]);
  const [carouselSmallImages, setCarouselSmallImages] = useState({images: [], initialIndex: 0});
  const [heroImage, setHeroImage] = useState({url: '', index: 0});

  useEffect(() => {
    Promise.all([getProducts(), getProductStyles()])
      .then(([product, styles]) => {
        setCurrentProduct(product.data);
        setProductStyles(styles.data);
        defaultStyle = createDefaultStyle(styles.data);
        setCurrentStyle({name: defaultStyle.name, originalPrice: defaultStyle.originalPrice});
        setHeroImage(defaultStyle.primaryImage);
        setCarouselLargeImages(defaultStyle.photoInfo);
        setCarouselSmallImages({
          images: defaultStyle.photoInfo.slice(0, 4),
          initialIndex: 0
        });
      });
  }, []);

  return {
    currentProduct, setCurrentProduct,
    productStyles, setProductStyles,
    currentStyle, setCurrentStyle,
    carouselLargeImages, setCarouselLargeImages,
    carouselSmallImages, setCarouselSmallImages,
    heroImage, setHeroImage
  };
}