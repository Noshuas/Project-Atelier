import React, { useContext } from 'react';
import { OverviewContext, ExpansionContext } from '../index.js';

export function HeroImage() {
  const { heroImage } = useContext(OverviewContext);
  const { primaryImageDisplayClass } = useContext(ExpansionContext);
  const { primaryImageWidthClass } = useContext(ExpansionContext);

  return (
    <div className={`primary-img-container ${primaryImageDisplayClass}`}>
      <img className={`primary-img ${primaryImageWidthClass}`} src={heroImage.url}/>
    </div>
  );
}