import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { ExpansionContext, useExpansion } from './index.js';
import { CurrentStyleContext, useCurrentStyle } from './index.js';
import { SelectionContext, useSelection } from './index.js';
import { HeroImage, SmallCarousel, ImageControls } from './index.js';
import { ProductDetails, StyleSelector, AddProduct } from './index.js';
import { ProductDescription } from './index.js';

function ExpansionComponents() {
  const expansionState = useExpansion();

  return (
    <ExpansionContext.Provider value={expansionState}>
      <CurrentStyleComponents classes={expansionState}/>
    </ExpansionContext.Provider>
  );
}

function CurrentStyleComponents({ classes }) {
  const styleState = useCurrentStyle();

  return (
    <CurrentStyleContext.Provider value={styleState}>
      <div className={`hero-picture ${classes.heroPictureContainerClass}`}>
        <SmallCarousel />
        <ImageControls />
        <HeroImage />
      </div>
      <div className={`details ${classes.detailsDisplayClass}`}>
        <ProductDetails />
        <SelectionComponents />
      </div>
    </CurrentStyleContext.Provider>
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