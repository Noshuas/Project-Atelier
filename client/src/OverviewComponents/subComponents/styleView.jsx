import React, { useContext } from 'react';
import { AppContext } from '../../AppComponents/index.js';
import { OverviewContext } from '../index.js';
import { iconURLs } from '../index.js';
import { getNewProductDetails } from '../index.js';

export function StyleSelector() {
  const {carouselLargeImages, setCarouselLargeImages} = useContext(OverviewContext);
  const {carouselSmallImages, setCarouselSmallImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  const {currentStyle, setCurrentStyle} = useContext(OverviewContext);

  let styleStorage = [];

  if (productStyles.results) {
    styleStorage = productStyles.results.map((style, index) => {
      return (
        <div key={index} className="style-img-wrapper" onClick={() => {
          let newProductDetails = getNewProductDetails(index, productStyles);
          setHeroImage({url: newProductDetails.primaryURL, index: 0});
          setCarouselLargeImages(newProductDetails.largePhotoURLs);
          setCarouselSmallImages({images: newProductDetails.smallPhotoURLs.slice(0, 4), initialIndex: 0});
          setCurrentStyle({name: newProductDetails.name, originalPrice: newProductDetails.originalPrice});
        }}>
          <img className="style-img" src={style.photos[0].thumbnail_url} />
        </div>
      );
    });
  }

  return (
    <div className="style-container">
      <div className="style-selected"><strong>STYLE &gt;</strong> {currentStyle.name}</div>
      {styleStorage}
    </div>
  );
}