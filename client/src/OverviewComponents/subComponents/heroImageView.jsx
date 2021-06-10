import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';

export function HeroImage() {
  const { heroImage, setHeroImage } = useContext(OverviewContext);
  const { primaryImageDisplayClass } = useContext(OverviewContext);
  const { primaryImageWidthClass } = useContext(OverviewContext);

  return (
    <div className={`primary-img-container ${primaryImageDisplayClass}`}>
      <img className={`primary-img ${primaryImageWidthClass}`} src={heroImage.url}/>
    </div>
  );
}