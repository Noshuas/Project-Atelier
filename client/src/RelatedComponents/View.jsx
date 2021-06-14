import React, {useContext} from 'react';
import { OverviewContext } from '../OverviewComponents/Hooks-Contexts/useOverview.jsx';

export function Related() {
  const {getNewProduct} = useContext(OverviewContext);

  return (
    <section className="related">
      RELATED
      <button className="new-product" onClick={() => getNewProduct(17067)}>See Camo Onesie</button>
      <button className="new-product" onClick={() => getNewProduct(17069)}>See Morning Joggers</button>
      <button className="new-product" onClick={() => getNewProduct(17070)}>See Slacker's Slacks</button>
    </section>);
}
