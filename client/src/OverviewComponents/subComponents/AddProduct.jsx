import React, { useContext, useState } from 'react';
import { CurrentStyleContext, SelectionContext } from '../index.js';

export function AddProduct() {
  const {
    userSizeAndQuantSelect,
    setUserSizeAndQuantSelect,
    cartErrorDisplayClass,
    setCartErrorDisplayClass
  } = useContext(SelectionContext);

  const {
    currentStyle
  } = useContext(CurrentStyleContext);

  let allInStockSizes = {};
  let anyInStockItems = false;
  let skuQuantity = [];

  if (currentStyle.skus) {
    for (var sku in currentStyle.skus) {
      if (currentStyle.skus[sku].quantity > 0) {
        allInStockSizes[currentStyle.skus[sku].size] = sku;
        anyInStockItems = true;
      }
    }
  }

  if (userSizeAndQuantSelect.sku) {
    for (var i = 1; i <= currentStyle.skus[userSizeAndQuantSelect.sku].quantity; i++) {
      skuQuantity.push(i);
      if (i === 15) {
        break;
      }
    }
  }

  return (
    <>
      <div className="size-quantity-container">
        <select
          className="size-select"
          value={userSizeAndQuantSelect.size || ''}
          onChange={({ target }) => {
            setCartErrorDisplayClass('hide-atc-err');
            if (target.value === 'Select Size') {
              setUserSizeAndQuantSelect({});
            } else {
              setUserSizeAndQuantSelect({
                sku: allInStockSizes[target.value],
                size: target.value,
                quantity: 'Quantity'
              });
            }
          }}
          disabled={!anyInStockItems}>
          <option>
            {anyInStockItems ? 'Select Size' : 'OUT OF STOCK'}
          </option>
          {Object.entries(allInStockSizes).map((size, index) => {
            return (
              <option key={index} value={size[0]}>{size[0]}</option>
            );
          })}
        </select>
        <select className="quantity-select" onChange={({ target }) => {
          setCartErrorDisplayClass('hide-atc-err');
          setUserSizeAndQuantSelect(cur => ({
            ...cur,
            quantity: target.value
          }));
        }}
        disabled={userSizeAndQuantSelect.size ? false : true}>
          <option>
            {skuQuantity.length > 0 ? 'Quantity' : '-'}
          </option>
          {skuQuantity.map((val, index) => {
            return (
              <option key={index} value={val}>{val}</option>
            );
          })}
        </select>
      </div>
      <div className={`add-to-cart-container ${anyInStockItems ? 'show-atc-btn' : 'hide-atc-btn'}`}>
        <button className="atc-btn" onClick={() => {
          if (!userSizeAndQuantSelect.sku) {
            setCartErrorDisplayClass('show-atc-err');
          } else if (userSizeAndQuantSelect.quantity === 'Quantity') {
            setCartErrorDisplayClass('show-atc-err');
          } else {
            setCartErrorDisplayClass('hide-atc-err');
            setUserSizeAndQuantSelect({});
          }
        }}>Add To Cart</button>
        <div className={`atc-error ${cartErrorDisplayClass}`}>
          Please select a Size and Quantity before adding to cart.
        </div>
      </div>
    </>
  );
}