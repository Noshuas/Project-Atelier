import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function ProductDetails() {
  const {currentProduct, setCurrentProduct} = useContext(OverviewContext);

  return (
    <>
      <div>Star Rating</div>
      <div className="product-category">Category: {currentProduct.category || 'Loading'}</div>
      <div className="product-title">{currentProduct.name || 'Loading'}</div>
      <div className="product-price">${currentProduct.default_price || 'Loading'}</div>
    </>
  );
}

// return (
//   <>
//     <div>Star Rating</div>
//     <div>{currentProduct.category || 'Loading'}</div>
//     <div>{currentProduct.name || 'Loading'}</div>
//     <div>{currentProduct.default_price || 'Loading'}</div>
//     <div>Style</div>
//     <div className="size-quantity-container">
//       <select>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//       </select>
//       <select>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//       </select>
//     </div>
//     <div className="add-to-cart-container">
//       <select>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//       </select>
//       <select>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//       </select>
//     </div>
//   </>
// );