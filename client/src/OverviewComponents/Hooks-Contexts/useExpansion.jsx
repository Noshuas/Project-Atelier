import React, { createContext, useState } from 'react';

export const ExpansionContext = createContext();

export function useExpansion() {
  // below state variables are used to update element className values
  const [heroPictureContainerClass, setHeroPictureContainerClass] = useState('hero-picture-container-default');
  const [carouselDisplayClass, setCarouselDisplayClass] = useState('carousel-container-default');
  const [smallImgDisplayClass, setSmallImgDisplayClass] = useState('small-img-default');
  const [primaryImageDisplayClass, setPrimaryImageDisplayClass] = useState('primary-img-default');
  const [primaryImageWidthClass, setPrimaryImageWidthClass] = useState('primary-img-width-height-default');
  const [primaryIconDisplayClass, setPrimaryIconDisplayClass] = useState('primary-icons-default');
  const [primaryIconPositionClass, setPrimaryIconPositionClass] = useState('primary-icon-default');
  const [expandIconDisplayClass, setExpandIconDisplayClass] = useState('expand-icon-default');
  const [detailsDisplayClass, setDetailsDisplayClass] = useState('details-display-default');
  const [cartErrorDisplayClass, setCartErrorDisplayClass] = useState('hide-atc-err');

  return {
    heroPictureContainerClass, setHeroPictureContainerClass,
    carouselDisplayClass, setCarouselDisplayClass,
    smallImgDisplayClass, setSmallImgDisplayClass,
    primaryImageDisplayClass, setPrimaryImageDisplayClass,
    primaryImageWidthClass, setPrimaryImageWidthClass,
    primaryIconDisplayClass, setPrimaryIconDisplayClass,
    primaryIconPositionClass, setPrimaryIconPositionClass,
    expandIconDisplayClass, setExpandIconDisplayClass,
    detailsDisplayClass, setDetailsDisplayClass,
    cartErrorDisplayClass, setCartErrorDisplayClass
  };
}