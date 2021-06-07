import React, { useState, useEffect } from 'react';
import brain from './brain.js';
import RandRAPIcalls from './RandRAPIcalls';

function ReviewItem(props) {
  let review = props.review;
  return (
    <div className="review-item">
      <div>{review.rating} stars ★★★★★</div>
      <div>{review.reviewer_name}, {brain.getFormatedTimestamp(review.date)}</div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <IRecommmendThisProduct recommend={review.recommend} />
      <ReviewResponse response={review.response} />
      <WasHelpful helpfulness={review.helpfulness} />
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
        <span>I recommend this product</span>
      </div>
    );
  }
  return null;
}

function WasHelpful(props) {

  return (
    <div className="was-helpful">
      <span>Was this review helpful?</span>
      <a href="#">Yes</a><span>({props.helpfulness})</span>
      <span>|</span>
      <a href="#">No</a>
    </div>
  );

}



export default ReviewItem;
