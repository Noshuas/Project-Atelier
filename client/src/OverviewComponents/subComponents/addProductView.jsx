import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function AddProduct() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);

  return (
    <>
      <div className="size-quantity-container">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="add-to-cart-container">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </>
  );
}