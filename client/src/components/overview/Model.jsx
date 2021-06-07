import React, { createContext, useState, useEffect } from 'react';
import { getProducts, getProductStyles } from './Controllers.js';

export const OverviewContext = createContext();

export function useOverview() {
  // set initial state values (static)
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});

  useEffect(() => {
    Promise.all([getProducts(), getProductStyles()])
      .then(([product, styles]) => {
        console.log(product.data);
        console.log(styles.data);
        setCurrentProduct(product.data);
        setProductStyles(styles.data);
      });
  }, []);

  return {
    currentProduct, setCurrentProduct,
    productStyles, setProductStyles
  };
}