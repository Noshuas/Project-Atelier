import React from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';

function ReviewMeta(props) {
  let formatedStars = brain.formatRatings(props.meta.data);
  let formatedChars = brain.formatCharsForDisplay(props.meta.data);
  let average = brain.getAverageRating(props.meta.data);
  let recommendationPercentage = brain.getRecommanendationPercentage(props.meta.data);
  return (
    <div className="ratings">
      <div className="main">
        <div className="average-rating">{average}</div>
        <ReadOnlyRatingStars rating={average} />
      </div>
      <div>{recommendationPercentage}% of reviews recommend this product</div>
      <FactorBreakdown rating={formatedStars} />
    </div>
  );
}

export default ReviewMeta;

function FactorBreakdown(props) {
  return (
    <div className="progress-containter">
      {props.rating.map(rating => {
        return (
          <div className="progress" key={rating.star}>
            <a href="#">{rating.star} stars</a>
            <progress max="100" value={rating.percent}></progress>
          </div>
        );
      })}
    </div>
  );
}