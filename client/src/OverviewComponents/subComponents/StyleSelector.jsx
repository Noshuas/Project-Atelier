import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';
import { getNewStyleDetails, iconURLs } from '../index.js';
import { useCurrentStyle } from '../index.js';

export function StyleSelector() {
  const {
    setCarouselLargeImages,
    setCarouselSmallImages,
    setHeroImage,
    productStyles,
    currentStyle,
    setCurrentStyle } = useCurrentStyle();
  const { setUserSizeAndQuantSelect } = useContext(OverviewContext);

  let styleStorage = [];

  if (productStyles.results) {
    styleStorage = productStyles.results.map((style, index) => {
      return (
        <div key={index} className='style-img-wrapper' onClick={() => {
          let newStyleDetails = getNewStyleDetails(productStyles, index);
          setUserSizeAndQuantSelect({});
          setHeroImage({
            url: newStyleDetails.primaryImageURL,
            initialIndex: 0
          });
          setCarouselLargeImages(newStyleDetails.largePhotoURLs);
          setCarouselSmallImages({
            images: newStyleDetails.smallPhotoURLs.slice(0, 4),
            initialIndex: 0
          });
          setCurrentStyle(newStyleDetails);
        }}>
          <img
            className={`check-mark-img ${style.name === currentStyle.name ? 'display-check-mark' : 'hide-check-mark'}`}
            src={iconURLs.blueCheckMark}
          />
          <img
            className='style-img'
            src={style.photos[0].thumbnail_url}
          />
        </div>
      );
    });
  }

  return (
    <div className='style-container'>
      <div className='style-selected'><strong>STYLE &gt;</strong> {currentStyle.name}</div>
      {styleStorage.slice(0, 8)}
    </div>
  );
}