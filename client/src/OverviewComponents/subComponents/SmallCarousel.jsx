import React, { useContext } from 'react';
import { ExpansionContext, StyleContext, ImageContext } from '../index.js';
import { iconURLs } from '../index.js';
import { incrementCarouselRange, decrementCarouselRange } from '../index.js';

export function SmallCarousel() {
  const {
    currentStyle,
    carouselSmallImages,
    setCarouselSmallImages,
    carouselLargeImages,
    setHeroImage
  } = useContext(StyleContext);

  const {
    carouselDisplayClass,
    smallImgDisplayClass
  } = useContext(ExpansionContext);

  return (
    <div className={`carousel-container ${carouselDisplayClass}`}>
      <div className="small-icon-wrapper-top" onClick={() => {
        setCarouselSmallImages(cur => decrementCarouselRange(cur, currentStyle.smallPhotoURLs));
      }}>
        <img className="small-icon-top" src={iconURLs.arrowUp} alt="carousel up icon"/>
      </div>

      {carouselSmallImages.images.map((photo, index) => {
        return (
          <div key={index} className="small-img-wrapper" onClick={() => {
            setHeroImage({
              url: carouselLargeImages[currentStyle.smallPhotoURLs.indexOf(photo)],
              alt: `${currentStyle.name} ${index}`,
              initialIndex: index
            });
          }}>
            <img className={`${smallImgDisplayClass}`} src={photo} alt={`${currentStyle.name} ${index}`}/>
          </div>);
      })}

      <div className="small-icon-wrapper-bottom" onClick={() => {
        setCarouselSmallImages(cur => incrementCarouselRange(cur, currentStyle.smallPhotoURLs));
      }}>
        <img className="small-icon-bottom" src={iconURLs.arrowDown} alt="carousel down icon"/>
      </div>
    </div>
  );
}