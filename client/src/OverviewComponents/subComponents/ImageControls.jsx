import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { displayNextImage, displayPreviousImage } from '../index.js';

export function ImageControls() {
  const { carouselLargeImages } = useContext(OverviewContext);
  const { setHeroImage } = useContext(OverviewContext);
  const { setHeroPictureContainerClass } = useContext(OverviewContext);
  const { setPrimaryImageDisplayClass } = useContext(OverviewContext);
  const { setPrimaryImageWidthClass } = useContext(OverviewContext);
  const { setDetailsDisplayClass } = useContext(OverviewContext);
  const { setCarouselDisplayClass } = useContext(OverviewContext);
  const { primaryIconDisplayClass, setPrimaryIconDisplayClass } = useContext(OverviewContext);
  const { expandIconDisplayClass, setExpandIconDisplayClass } = useContext(OverviewContext);

  let expandIcon = '-';

  if (expandIconDisplayClass === 'expand-icon-default') {
    expandIcon = '+';
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