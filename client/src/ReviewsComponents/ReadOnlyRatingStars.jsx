import React from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';

function ReadOnlyRatingStars(props) {
  let formated = brain.formatStarRating(props.rating);
  return (
    <div className="rating-stars">
      {formated.map((width, index) => <Star key={index} width={width}/>)}
    </div>
  );
}

function Star(props) {
  return (
    <div className="star-container">
      <i className="fas fa-star" style={{width: props.width}}></i>
      <i className="far fa-star"></i>
    </div>
  );
}

export default ReadOnlyRatingStars;