import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { incrementCarouselRange, decrementCarouselRange } from '../index.js';

export function SmallCarousel() {
  const {productImages, setProductImages} = useContext(OverviewContext);
  const {carourselSmallImages, setCarourselSmallImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);

  return (
    <div className="small-pic-container">
      <div className="small-icon-wrapper" onClick={() => {
        setCarourselSmallImages(cur => incrementCarouselRange(cur, productImages));
      }}>
        <img className="small-icon-top" src={iconURLs.arrowUp}/>
      </div>

      {carourselSmallImages.images.map((thumbAndPrimaryPhotoLinks, index) => {
        return (
          <div key={index} className="small-pic-wrapper" onClick={() => {
            setHeroImage({url: thumbAndPrimaryPhotoLinks.url, index: index});
          }}>
            <img className="small-img" src={thumbAndPrimaryPhotoLinks.thumbnail_url}/>
          </div>);
      })}

      <div className="small-icon-wrapper" onClick={() => {
        setCarourselSmallImages(cur => decrementCarouselRange(cur, productImages));
      }}>
        <img className="small-icon-bottom" src={iconURLs.arrowDown}/>
      </div>
    </div>
  );
}