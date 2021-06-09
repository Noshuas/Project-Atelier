import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function HeroImage() {
  const {heroImage, setHeroImage} = useContext(OverviewContext);

  return (
    <div className="primary-img-container">
      <img className="primary-img" src={heroImage.url}/>
    </div>
  );
}