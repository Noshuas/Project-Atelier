import React, { useContext } from 'react';
import { ExpansionContext, CurrentStyleContext } from '../index.js';

export function HeroImage() {
  const { heroImage } = useContext(CurrentStyleContext);
  const { primaryImageDisplayClass } = useContext(ExpansionContext);
  const { primaryImageWidthClass } = useContext(ExpansionContext);

  console.log('rere');

  return (
    <div className={`primary-img-container ${primaryImageDisplayClass}`}>
      <img className={`primary-img ${primaryImageWidthClass}`} src={heroImage.url}/>
    </div>
  );
}