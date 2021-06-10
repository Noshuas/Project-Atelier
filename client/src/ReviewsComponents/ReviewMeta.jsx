import React from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';

function ReviewMeta(props) {
  let formated = brain.formatRatings(props.meta.data);
  let average = brain.getAverageRating(props.meta.data);
  let recommendationPercentage = brain.getRecommanendationPercentage(props.meta.data);
  return (
    <div className="ratings">
      <div className="main">
        <div className="average-rating">{average}</div>
        <ReadOnlyRatingStars rating={average} />
      </div>
      <div>{recommendationPercentage}% of reviews recommend this product</div>
    </div>
  );
}

export default ReviewMeta;
