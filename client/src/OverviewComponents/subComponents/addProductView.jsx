import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';

export function AddProduct() {
  const {currentStyle, setCurrentStyle} = useContext(OverviewContext);
  const {userSelections, setUserSelections} = useContext(OverviewContext);

  let allInStockSizes = {};
  let skuQuantity = [];

  if (currentStyle.skus) {
    for (var sku in currentStyle.skus) {
      if (currentStyle.skus[sku].quantity > 0) {
        allInStockSizes[currentStyle.skus[sku].size] = sku;
      }
    }
  }

  if (userSelections.sku) {
    for (var i = 1; i <= currentStyle.skus[userSelections.sku].quantity; i++) {
      skuQuantity.push(i);
      if (i === 15) {
        break;
      }
    }
  }

  return (
    <>
      <div className="size-quantity-container">
        <select className="size-select" onChange={({ target }) => {
          if (target.value === 'Select Size') {
            setUserSelections({});
          } else {
            setUserSelections({
              sku: allInStockSizes[target.value],
              size: target.value,
              quantity: 0
            });
          }
        }} disabled={Object.keys(allInStockSizes).length > 0 ? false : true}>
          <option>
            {Object.keys(allInStockSizes).length > 0 ? 'Select Size' : 'OUT OF STOCK'}
          </option>
          {Object.entries(allInStockSizes).map((size, index) => {
            return (
              <option key={index} value={size[0]}>{size[0]}</option>
            );
          })}
        </select>
        <select className="quantity-select" disabled={userSelections.size ? false : true}>
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
      <div className="add-to-cart-container">
        <button>Add To Bag</button>
      </div>
    </>
  );
}