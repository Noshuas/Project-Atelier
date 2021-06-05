import React from 'react';
import brain from './brain.js';
import APIcalls from './APIcalls';
import ReviewMeta from './ReviewMeta';



function RandR (props) {
  //change to "props.RandR.reviews.results || []" when data comes.
  let reviews = [];
  //change to "props.RandR.ratings
  let ratings = {};
  //change to "props.RandR.characteristics
  let characteristics = {};


  return (
    <div className="ratings-and-reviews">
      <h3>RATINGS AND REVIEWS</h3>
      <ReviewMeta />
      <div className="review-sorting"></div>
      <div className="review-list">{reviews.map(review => <ReviewItem />)}</div>
    </div>
  );
}

export default RandR;