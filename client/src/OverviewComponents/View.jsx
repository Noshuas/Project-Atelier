import React, { useContext } from 'react';
import { AppContext } from '../AppComponents/index.js';
import { OverviewContext } from './index.js';
import { HeroImage, SmallCarousel, ImageControls } from './index.js';
import { ProductDetails, StyleSelector, AddProduct } from './index.js';
import { ProductDescription } from './index.js';

export function Overview() {
  const { clickListener } = useContext(AppContext);
  const { heroPictureContainerClass } = useContext(OverviewContext);
  const { detailsDisplayClass } = useContext(OverviewContext);

  return (
    <section className="overview" onClick={(event) => {
      clickListener(event, 'Overview');
    }}>
      <div className="sale">
        Site-Wide Annoucement Message - Sale/Discount Offer
      </div>
      <div className={`hero-picture ${heroPictureContainerClass}`}>
        <SmallCarousel />
        <ImageControls />
        <HeroImage />
      </div>
      <div className={`details ${detailsDisplayClass}`}>
        <ProductDetails />
        <StyleSelector />
        <AddProduct />
      </div>
      <div className="description">
        <ProductDescription />
      </div>
    </section>
  );
}