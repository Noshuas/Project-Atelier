import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { ExpansionContext, useExpansion } from './index.js';
import { StyleContext, useStyle } from './index.js';
import { SelectionContext, useSelection } from './index.js';
import { HeroImage, SmallCarousel, ImageControls } from './index.js';
import { ProductDetails, StyleSelector, AddProduct } from './index.js';
import { ProductDescription } from './index.js';

function ExpansionComponents() {
  const expansionState = useExpansion();

  return (
    <ExpansionContext.Provider value={expansionState}>
      <CurrentStyleComponents />
    </ExpansionContext.Provider>
  );
}

function CurrentStyleComponents() {
  const {
    heroPictureContainerClass,
    detailsDisplayClass
  } = useContext(ExpansionContext);

  return (
    <>
      <div className={`hero-picture ${heroPictureContainerClass}`}>
        <SmallCarousel />
        <ImageControls />
        <HeroImage />
      </div>
      <div className={`details ${detailsDisplayClass}`}>
        <ProductDetails />
        <SelectionComponents />
      </div>
    </>
  );
}

function SelectionComponents() {
  const selectionState = useSelection();

  return (
    <SelectionContext.Provider value={selectionState}>
      <StyleSelector />
      <AddProduct />
    </SelectionContext.Provider>
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
      <ExpansionComponents />
      <div className="description">
        <ProductDescription />
      </div>
    </section>
  );
}