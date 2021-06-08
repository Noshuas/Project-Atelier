import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { displayNextImage, displayPreviousImage } from '../index.js';

export function HeroImage() {
  const {productImages, setProductImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);

  return (
    <div className="primary-img-container">
      <div className="small-icon-wrapper-horizontal" onClick={() => {
        setHeroImage(cur => displayPreviousImage(cur, productImages));
      }}>
        <img className="small-icon-left" src={iconURLs.arrowLeft}/>
      </div>
      <img className="primary-img" src={heroImage.url}/>
      <div className="small-icon-wrapper-horizontal" onClick={() => {
        setHeroImage(cur => displayNextImage(cur, productImages));
      }}>
        <img className="small-icon-right" src={iconURLs.arrowRight}/>
      </div>
    </div>
  );
}