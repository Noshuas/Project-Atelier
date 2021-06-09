import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { displayNextImage, displayPreviousImage } from '../index.js';

export function ImageControls() {
  const {carouselLargeImages, setCarouselLargeImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);

  return (
    <div className="primary-img-icons">
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
    </div>
  );
}