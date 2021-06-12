import React, { useContext } from 'react';
import { OverviewContext } from '../index.js';
import { getNewStyleDetails } from '../index.js';

export function StyleSelector() {
  const { setCarouselLargeImages } = useContext(OverviewContext);
  const { setCarouselSmallImages } = useContext(OverviewContext);
  const { setHeroImage } = useContext(OverviewContext);
  const { productStyles } = useContext(OverviewContext);
  const { currentStyle, setCurrentStyle } = useContext(OverviewContext);
  const { setUserSizeAndQuantSelect } = useContext(OverviewContext);

  let styleStorage = [];

  if (productStyles.results) {
    styleStorage = productStyles.results.map((style, index) => {
      return (
        <div key={index} className="style-img-wrapper" onClick={() => {
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