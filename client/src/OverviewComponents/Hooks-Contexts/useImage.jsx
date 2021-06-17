import React, { useState, useEffect, createContext } from 'react';
import { getProductStyles, getDefaultStyleDetails } from '../index.js';

export const ImageContext = createContext();

export function useImage(style) {
  const [heroImage, setHeroImage] = useState({url: style.primaryImageURL, alt: style.name, initialIndex: 0});
  const [carouselLargeImages, setCarouselLargeImages] = useState(style.largePhotoURLs);
  const [carouselSmallImages, setCarouselSmallImages] = useState({images: style.smallPhotoURLs, initialIndex: 0});

  return {
    heroImage, setHeroImage,
    carouselLargeImages, setCarouselLargeImages,
    carouselSmallImages, setCarouselSmallImages
  };
}