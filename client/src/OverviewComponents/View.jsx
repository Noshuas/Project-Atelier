import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { ExpansionContext, useExpansion } from './index.js';
import { HeroImage, SmallCarousel, ImageControls } from './index.js';
import { ProductDetails, StyleSelector, AddProduct } from './index.js';
import { ProductDescription } from './index.js';


function ImageDetailsSelectors() {
  const expansionState = useExpansion();

  return (
    <ExpansionContext.Provider value={expansionState}>
      <div className={`hero-picture ${expansionState.heroPictureContainerClass}`}>
        <SmallCarousel />
        <ImageControls />
        <HeroImage />
      </div>
      <div className={`details ${expansionState.detailsDisplayClass}`}>
        <ProductDetails />
        <StyleSelector />
        <AddProduct />
      </div>
    </ExpansionContext.Provider>
  );
}

export function Overview() {
  const { clickListener } = useContext(AppContext);

  return (
    <section className="overview" onClick={(event) => {
      clickListener(event, 'Overview');
    }}>
      <div className="sale">
        Site-Wide Annoucement Message - Sale/Discount Offer
      </div>
      <ImageDetailsSelectors />
      <div className="description">
        <ProductDescription />
      </div>
    </section>
  );
}