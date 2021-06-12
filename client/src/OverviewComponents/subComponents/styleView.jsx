import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';
import { getNewStyleDetails } from '../index.js';

export function StyleSelector() {
  const {carouselLargeImages, setCarouselLargeImages} = useContext(OverviewContext);
  const {carouselSmallImages, setCarouselSmallImages} = useContext(OverviewContext);
  const {heroImage, setHeroImage} = useContext(OverviewContext);
  const {productStyles, setProductStyles} = useContext(OverviewContext);
  const {currentStyle, setCurrentStyle} = useContext(OverviewContext);
  const {userSizeAndQuantSelect, setUserSizeAndQuantSelect} = useContext(OverviewContext);

  let styleStorage = [];

  if (productStyles.results) {
    styleStorage = productStyles.results.map((style, index) => {
      return (
        <div key={index} className="style-img-wrapper" onClick={() => {
          let newStyleDetails = getNewStyleDetails(index, productStyles);
          setUserSizeAndQuantSelect({});
          setHeroImage({
            url: newStyleDetails.primaryURL,
            index: 0
          });
          setCarouselLargeImages(newStyleDetails.largePhotoURLs);
          setCarouselSmallImages({
            images: newStyleDetails.smallPhotoURLs.slice(0, 4),
            initialIndex: 0
          });
          setCurrentStyle(newStyleDetails);
        }}>
          <img className="style-img" src={style.photos[0].thumbnail_url} />
        </div>
      );
    });
  }

  return (
    <div className="style-container">
      <div className="style-selected"><strong>STYLE &gt;</strong> {currentStyle.name}</div>
      {styleStorage.slice(0, 8)}
    </div>
  );
}