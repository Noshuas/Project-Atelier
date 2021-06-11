import { Overview } from './View.jsx';
import { OverviewContext, useOverview } from './Model.jsx';
import { getProducts, getProductStyles } from './Controllers.jsx';
import { getProductReviewsMeta, getProductReviews } from './Controllers.jsx';
import { displayNextImage, displayPreviousImage, createStars } from './Controllers.jsx';
import { incrementCarouselRange, decrementCarouselRange } from './Controllers.jsx';
import { createDefaultStyle, getNewProductDetails } from './Controllers.jsx';
import { iconURLs } from './iconURLs.js';
import { HeroImage } from './subComponents/heroImageView.jsx';
import { ImageControls } from './subComponents/primaryIconView.jsx';
import { SmallCarousel } from './subComponents/smallCarouselView.jsx';
import { StyleSelector } from './subComponents/styleView.jsx';
import { AddProduct } from './subComponents/addProductView.jsx';

import { ProductDescription } from './subComponents/descriptionView.jsx';
import { ProductDetails } from './subComponents/detailsView.jsx';

export {
  Overview,
  OverviewContext,
  useOverview,
  getProducts,
  getProductStyles,
  getProductReviewsMeta,
  getProductReviews,
  displayNextImage,
  displayPreviousImage,
  createStars,
  incrementCarouselRange,
  decrementCarouselRange,
  createDefaultStyle,
  getNewProductDetails,
  iconURLs,
  HeroImage,
  ImageControls,
  SmallCarousel,
  StyleSelector,
  AddProduct,
  ProductDescription,
  ProductDetails
};