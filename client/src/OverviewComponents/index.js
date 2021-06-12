import { Overview } from './View.jsx';
import { OverviewContext, useOverview } from './Model.jsx';
import { getProductDetails, getProductStyles } from './Controllers.jsx';
import { getProductReviewsMeta, getProductReviews } from './Controllers.jsx';
import { displayNextImage, displayPreviousImage, createStars } from './Controllers.jsx';
import { incrementCarouselRange, decrementCarouselRange } from './Controllers.jsx';
import { getDefaultStyleDetails, getNewStyleDetails } from './Controllers.jsx';
import { iconURLs } from './iconURLs.js';
import { HeroImage } from './subComponents/HeroImage.jsx';
import { ImageControls } from './subComponents/ImageControls.jsx';
import { SmallCarousel } from './subComponents/SmallCarousel.jsx';
import { StyleSelector } from './subComponents/styleView.jsx';
import { AddProduct } from './subComponents/addProductView.jsx';

import { ProductDescription } from './subComponents/descriptionView.jsx';
import { ProductDetails } from './subComponents/detailsView.jsx';

export {
  Overview,
  OverviewContext,
  useOverview,
  getProductDetails,
  getProductStyles,
  getProductReviewsMeta,
  getProductReviews,
  displayNextImage,
  displayPreviousImage,
  createStars,
  incrementCarouselRange,
  decrementCarouselRange,
  getDefaultStyleDetails,
  getNewStyleDetails,
  iconURLs,
  HeroImage,
  ImageControls,
  SmallCarousel,
  StyleSelector,
  AddProduct,
  ProductDescription,
  ProductDetails
};