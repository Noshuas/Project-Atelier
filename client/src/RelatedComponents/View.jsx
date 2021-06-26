import React, {useContext} from 'react';
import { ProductContext, useProduct } from '../OverviewComponents/Hooks-Contexts/useProduct.jsx';
import { StyleContext, useStyle } from '../OverviewComponents/Hooks-Contexts/useStyle.jsx';

export function Related() {
  const { getNewStyle } = useContext(StyleContext);
  const { getNewProduct } = useContext(ProductContext);

  return (
    <section className="related">
      RELATED
      <button className="new-product" onClick={() => {
        getNewProduct(17067);
        getNewStyle(17067);
      }}>See Camo Onesie</button>
      <button className="new-product" onClick={() => {
        getNewProduct(17069);
        getNewStyle(17069);
      }}>See Morning Joggers</button>
      <button className="new-product" onClick={() => {
        getNewProduct(17070);
        getNewStyle(17070);
      }}>See Slacker's Slacks</button>
    </section>);
}
