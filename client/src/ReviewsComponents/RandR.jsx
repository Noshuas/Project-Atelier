import React, { useState, useEffect } from 'react';
import brain from './brain.js';
import APIcalls from './APIcalls';
import ReviewMeta from './ReviewMeta.jsx';
import ReviewItem from './ReviewItem.jsx';



function RandR (props) {
  //Get reviews every time productId changes
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    APIcalls.getReviews(props.productId)
      .then(response => setReviews(response.data.results));
  }, [props.productId]);
  //change to "props.RandR.ratings
  let ratings = {};
  //change to "props.RandR.characteristics
  let characteristics = {};


  return (
    <div className="ratings-and-reviews">
      <h3>RATINGS AND REVIEWS</h3>
      <ReviewMeta />
      <div className="review-sorting"></div>
      <div className="review-list">{reviews.map(review => <ReviewItem key={review.review_id} review={review}/>)}</div>
    </div>
  );
}

export default RandR;