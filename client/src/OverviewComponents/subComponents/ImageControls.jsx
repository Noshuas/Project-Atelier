import React, { useContext } from 'react';
import { ExpansionContext, CurrentStyleContext } from '../index.js';
import { iconURLs } from '../index.js';
import { displayNextImage, displayPreviousImage } from '../index.js';


export function ImageControls() {
  const {
    carouselLargeImages,
    setHeroImage
  } = useContext(CurrentStyleContext);

  const {
    setHeroPictureContainerClass,
    setPrimaryImageDisplayClass,
    setPrimaryImageWidthClass,
    setDetailsDisplayClass,
    setCarouselDisplayClass,
    setSmallImgDisplayClass,
    primaryIconDisplayClass,
    setPrimaryIconDisplayClass,
    primaryIconPositionClass,
    setPrimaryIconPositionClass,
    expandIconDisplayClass,
    setExpandIconDisplayClass
  } = useContext(ExpansionContext);

  let expandIcon = '-';

  if (expandIconDisplayClass === 'expand-icon-default') {
    expandIcon = '+';
  }

  return (
    <div className={`primary-img-icons ${primaryIconDisplayClass}`}>
      <div className="small-icon-wrapper-left" onClick={() => {
        setHeroImage(cur => displayPreviousImage(cur, carouselLargeImages));
      }}>
        <img className={`small-icon-left ${primaryIconPositionClass}`} src={iconURLs.arrowLeft}/>
      </div>
      <div className="small-icon-wrapper-right" onClick={() => {
        setHeroImage(cur => displayNextImage(cur, carouselLargeImages));
      }}>
        <img className={`small-icon-right ${primaryIconPositionClass}`} src={iconURLs.arrowRight}/>
      </div>
      <div className={`expand-icon ${expandIconDisplayClass}`} onClick={() => {
        setHeroPictureContainerClass(cur => {
          return cur === 'hero-picture-container-default' ? 'hero-picture-container-expanded' : 'hero-picture-container-default';
        });
        setPrimaryImageDisplayClass(cur => {
          return cur === 'primary-img-default' ? 'primary-img-expanded' : 'primary-img-default';
        });
        setPrimaryIconDisplayClass(cur => {
          return cur === 'primary-icons-default' ? 'primary-icons-expanded' : 'primary-icons-default';
        });
        setPrimaryIconPositionClass(cur => {
          return cur === 'primary-icon-default' ? 'primary-icon-expanded' : 'primary-icon-default';
        });
        setExpandIconDisplayClass(cur => {
          return cur === 'expand-icon-default' ? 'expand-icon-expanded' : 'expand-icon-default';
        });
        setPrimaryImageWidthClass(cur => {
          return cur === 'primary-img-width-height-default' ? 'primary-img-width-height-expanded' : 'primary-img-width-height-default';
        });
        setDetailsDisplayClass(cur => {
          return cur === 'details-display-default' ? 'details-display-expanded' : 'details-display-default';
        });
        setCarouselDisplayClass(cur => {
          return cur === 'carousel-container-default' ? 'carousel-container-expanded' : 'carousel-container-default';
        });
        setSmallImgDisplayClass(cur => {
          return cur === 'small-img-default' ? 'small-img-expanded' : 'small-img-default';
        });
      }}>{expandIcon}</div>
    </div>
  );
}