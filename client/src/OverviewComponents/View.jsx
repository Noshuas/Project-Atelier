import React from 'react';
import { HeroImage, SmallCarousel, ProductDetails, ProductDescription } from './index.js';

export function Overview() {

  return (
    <section className="overview">
      <div className="sale">
        Site-Wide Annoucement Message - Sale/Discount Offer
      </div>
      <div className="hero-picture">
        <SmallCarousel />
        <HeroImage />
      </div>
      <div className="details">
        <ProductDetails />
      </div>
      <div className="description">
        <ProductDescription />
      </div>
    </section>
  );
}