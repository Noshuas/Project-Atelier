import React, { useState, useEffect, createContext } from 'react';
import { getProductStyles, getDefaultStyleDetails } from '../index.js';

export const StyleContext = createContext();

export function useStyle() {
  const [productStyles, setProductStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [heroImage, setHeroImage] = useState({url: '', alt: '', initialIndex: 0});
  const [carouselLargeImages, setCarouselLargeImages] = useState([]);
  const [carouselSmallImages, setCarouselSmallImages] = useState({images: [], initialIndex: 0});

  let defaultStyleDetails = [];
  let productId = '17067';

  useEffect(() => {
    getProductStyles(productId)
      .then(resVal => {
        defaultStyleDetails = getDefaultStyleDetails(resVal.data);
        setProductStyles(resVal.data);
        setCurrentStyle(defaultStyleDetails);
        setHeroImage({url: defaultStyleDetails.primaryImageURL, alt: defaultStyleDetails.name, initialIndex: 0});
        setCarouselLargeImages(defaultStyleDetails.largePhotoURLs);
        setCarouselSmallImages({
          images: defaultStyleDetails.smallPhotoURLs.slice(0, 4),
          initialIndex: 0
        });
      });
  }, []);

  function getNewStyle(productId) {
    getProductStyles(productId)
      .then(resVal => {
        defaultStyleDetails = getDefaultStyleDetails(resVal.data);
        setProductStyles(resVal.data);
        setCurrentStyle(defaultStyleDetails);
        setHeroImage({url: defaultStyleDetails.primaryImageURL, alt: defaultStyleDetails.name, initialIndex: 0});
        setCarouselLargeImages(defaultStyleDetails.largePhotoURLs);
        setCarouselSmallImages({
          images: defaultStyleDetails.smallPhotoURLs.slice(0, 4),
          initialIndex: 0
        });
      });
  }

  return {
    productStyles, setProductStyles,
    currentStyle, setCurrentStyle,
    heroImage, setHeroImage,
    carouselLargeImages, setCarouselLargeImages,
    carouselSmallImages, setCarouselSmallImages,
    getNewStyle
  };
}