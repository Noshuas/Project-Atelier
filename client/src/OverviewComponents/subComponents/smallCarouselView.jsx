import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { incrementCarouselRange, decrementCarouselRange } from '../index.js';

export function SmallCarousel() {
  const {carouselLargeImages, setCarouselLargeImages} = useContext(OverviewContext);
  const {carouselSmallImages, setCarouselSmallImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);
  const {carouselDisplayClass, setCarouselDisplayClass} = useContext(OverviewContext);

  return (
    <div className={`carousel-container ${carouselDisplayClass}`}>
      <div className="small-icon-wrapper" onClick={() => {
        setCarouselSmallImages(cur => decrementCarouselRange(cur, carouselLargeImages));
      }}>
        <img className="small-icon-top" src={iconURLs.arrowUp}/>
      </div>

      {carouselSmallImages.images.map((thumbAndPrimaryPhotoLinks, index) => {
        return (
          <div key={index} className="small-img-wrapper" onClick={() => {
            setHeroImage({url: thumbAndPrimaryPhotoLinks.url, index: index});
          }}>
            <img className="small-img" src={thumbAndPrimaryPhotoLinks.thumbnail_url}/>
          </div>);
      })}

      <div className="small-icon-wrapper" onClick={() => {
        setCarouselSmallImages(cur => incrementCarouselRange(cur, carouselLargeImages));
      }}>
        <img className="small-icon-bottom" src={iconURLs.arrowDown}/>
      </div>
    </div>
  );
}