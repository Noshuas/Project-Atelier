import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import RatingStars from './RatingStars.jsx';
import WasHelpful from './WasHelpful.jsx';

function ReviewItem(props) {
  let review = props.review;
  return (
    <div className="review-item">
      <div className="top-row">
        <span><RatingStars rating={review.rating}/></span>
        <span>{review.reviewer_name}, {brain.getFormatedTimestamp(review.date)}</span>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <IRecommmendThisProduct recommend={review.recommend} />
      <ReviewResponse response={review.response} />
      <WasHelpful helpfulness={review.helpfulness} reviewId={review.review_id} />
    </div>
  );
}

function ReviewResponse(props) {
  if (props.response) {
    return (
      <div className="review-response">
        <h4>Response from seller:</h4>
        <p>{props.response}</p>
      </div>
    );
  }
  return null;
}

function IRecommmendThisProduct(props) {
  if (props.recommend) {
    return (
      <div>
        <span>✓ I recommend this product</span>
      </div>
    );
  }
  return null;
}

export default ReviewItem;
