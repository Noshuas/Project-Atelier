import { Overview } from './View.jsx';
import { OverviewContext, useOverview } from './Model.jsx';
import { getProducts, getProductStyles } from './Controllers.js';
import { displayNextImage, displayPreviousImage } from './Controllers.js';
import { incrementCarouselRange, decrementCarouselRange } from './Controllers.js';
import { createDefaultStyle, getNewProductDetails } from './Controllers.js';
import { iconURLs } from './iconURLs.js';
import { HeroImage } from './subComponents/heroImageView.jsx';
import { ImageControls } from './subComponents/primaryIconView.jsx';
import { SmallCarousel } from './subComponents/smallCarouselView.jsx';
import { StyleSelector } from './subComponents/styleView.jsx';

import { ProductDescription } from './subComponents/descriptionView.jsx';
import { ProductDetails } from './subComponents/detailsView.jsx';

export {
  Overview,
  OverviewContext,
  useOverview,
  getProducts,
  getProductStyles,
  displayNextImage,
  displayPreviousImage,
  incrementCarouselRange,
  decrementCarouselRange,
  createDefaultStyle,
  getNewProductDetails,
  iconURLs,
  HeroImage,
  ImageControls,
  SmallCarousel,
  StyleSelector,
  ProductDescription,
  ProductDetails
};