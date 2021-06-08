import React, { createContext, useState, useEffect } from 'react';
import { getProducts, getProductStyles } from './Controllers.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set initial state values (static)
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [productImages, setProductImages] = useState([]);

  let thumbnailStorage = [];

  useEffect(() => {
    Promise.all([getProducts(), getProductStyles()])
      .then(([product, styles]) => {
        setCurrentProduct(product.data);
        setProductStyles(styles.data);
        for (var style of styles.data.results[0].photos) {
          thumbnailStorage.push(style.thumbnail_url);
        }
        setProductImages(thumbnailStorage);
      });
  }, []);

  return {
    currentProduct, setCurrentProduct,
    productStyles, setProductStyles,
    productImages, setProductImages
  };
}