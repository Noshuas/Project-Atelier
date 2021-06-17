import React, { useContext } from 'react';
import { ExpansionContext, StyleContext } from '../index.js';

export function HeroImage() {
  const { heroImage } = useContext(StyleContext);
  const { primaryImageDisplayClass } = useContext(ExpansionContext);
  const { primaryImageWidthClass } = useContext(ExpansionContext);

  return (
    <div className={`primary-img-container ${primaryImageDisplayClass}`}>
      <img className={`primary-img ${primaryImageWidthClass}`} src={heroImage.url} alt={heroImage.alt}/>
    </div>
  );
}