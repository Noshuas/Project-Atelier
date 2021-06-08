import React, { createContext, useState, useEffect } from 'react';
import { getProducts, getProductStyles } from './Controllers.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set helper/storage variables
  let photoStorage = [];
  let defaultProduct = {};

  // set initial state values (static)
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [carourselSmallImages, setCarourselSmallImages] = useState({images: [], initialIndex: 0});
  const [heroImage, setHeroImage] = useState({url: '', index: 0});

  useEffect(() => {
    Promise.all([getProducts(), getProductStyles()])
      .then(([product, styles]) => {
        setCurrentProduct(product.data);
        setProductStyles(styles.data);
        for (var style of styles.data.results) {
          if (style['default?']) {
            setHeroImage({url: style.photos[0].url, index: 0});
            for (var photo of style.photos) {
              photoStorage.push(photo);
            }
            break;
          }
        }
        setProductImages(photoStorage);
        setCarourselSmallImages({
          images: photoStorage.slice(0, 4),
          initialIndex: 0
        });
      });
  }, []);

  return {
    currentProduct, setCurrentProduct,
    productStyles, setProductStyles,
    productImages, setProductImages,
    carourselSmallImages, setCarourselSmallImages,
    heroImage, setHeroImage
  };
}