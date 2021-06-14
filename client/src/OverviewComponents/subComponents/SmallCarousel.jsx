import React, { useContext } from 'react';
import { OverviewContext, ExpansionContext } from '../index.js';
import { iconURLs } from '../index.js';
import { incrementCarouselRange, decrementCarouselRange } from '../index.js';
import { useCurrentStyle } from '../index.js';

export function SmallCarousel() {
  const {
    currentStyle,
    carouselSmallImages,
    setCarouselSmallImages,
    carouselLargeImages,
    setHeroImage } = useCurrentStyle();
  const { carouselDisplayClass } = useContext(ExpansionContext);
  const { smallImgDisplayClass } = useContext(ExpansionContext);

  return (
    <div className={`carousel-container ${carouselDisplayClass}`}>
      <div className="small-icon-wrapper" onClick={() => {
        setCarouselSmallImages(cur => decrementCarouselRange(cur, currentStyle.smallPhotoURLs));
      }}>
        <img className="small-icon-top" src={iconURLs.arrowUp}/>
      </div>

      {carouselSmallImages.images.map((photo, index) => {
        return (
          <div key={index} className="small-img-wrapper" onClick={() => {
            setHeroImage({
              url: carouselLargeImages[currentStyle.smallPhotoURLs.indexOf(photo)],
              initialIndex: index
            });
          }}>
            <img className={`${smallImgDisplayClass}`} src={photo}/>
          </div>);
      })}

      <div className="small-icon-wrapper" onClick={() => {
        setCarouselSmallImages(cur => incrementCarouselRange(cur, currentStyle.smallPhotoURLs));
      }}>
        <img className="small-icon-bottom" src={iconURLs.arrowDown}/>
      </div>
    </div>
  );
}