import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { displayNextImage, displayPreviousImage } from '../index.js';

export function ImageControls() {
  const {carouselLargeImages, setCarouselLargeImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);
  const {heroPictureContainerClass, setHeroPictureContainerClass} = useContext(OverviewContext);
  const {primaryImageDisplayClass, setPrimaryImageDisplayClass} = useContext(OverviewContext);
  const {primaryIconDisplayClass, setPrimaryIconDisplayClass} = useContext(OverviewContext);
  const {expandIconDisplayClass, setExpandIconDisplayClass} = useContext(OverviewContext);
  const {primaryImageWidthClass, setPrimaryImageWidthClass} = useContext(OverviewContext);
  const {detailsDisplayClass, setDetailsDisplayClass} = useContext(OverviewContext);
  const {carouselDisplayClass, setCarouselDisplayClass} = useContext(OverviewContext);

  let expandIcon;

  if (expandIconDisplayClass === 'expand-icon-default') {
    expandIcon = '+';
  } else {
    expandIcon = '-';
  }

  return (
    <div className={`primary-img-icons ${primaryIconDisplayClass}`}>
      <div className="small-icon-wrapper-left" onClick={() => {
        setHeroImage(cur => displayPreviousImage(cur, carouselLargeImages));
      }}>
        <img className="small-icon-left" src={iconURLs.arrowLeft}/>
      </div>
      <div className="small-icon-wrapper-right" onClick={() => {
        setHeroImage(cur => displayNextImage(cur, carouselLargeImages));
      }}>
        <img className="small-icon-right" src={iconURLs.arrowRight}/>
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
        setExpandIconDisplayClass(cur => {
          return cur === 'expand-icon-default' ? 'expand-icon-expanded' : 'expand-icon-default';
        });
        setPrimaryImageWidthClass(cur => {
          return cur === 'primary-img-width-default' ? 'primary-img-width-expanded' : 'primary-img-width-default';
        });
        setDetailsDisplayClass(cur => {
          return cur === 'details-display-default' ? 'details-display-expanded' : 'details-display-default';
        });
        setCarouselDisplayClass(cur => {
          return cur === 'carousel-container-default' ? 'carousel-container-expanded' : 'carousel-container-default';
        });
      }}>{expandIcon}</div>
    </div>
  );
}