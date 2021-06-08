import React, { useState, useEffect } from 'react';
import brain from './brain.js';
import RandRAPIcalls from './RandRAPIcalls';
import RatingStars from './RatingStars.jsx';

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

function WasHelpful(props) {
  const [feedbackGiven, setFeedback] = useState(false);
  function handleFeedback(e) {
    e.preventDefault();
    setFeedback(true);
  }

  if (!feedbackGiven) {
    return (
      <div className="was-helpful">
        <span>Was this review helpful?</span>
        <span><a href="#" onClick={handleFeedback}>Yes</a> ({props.helpfulness})</span>
        <span>|</span>
        <a href="#" onClick={handleFeedback}>No</a>
      </div>
    );
  } else {
    return (
      <div>Thank you for your feedback!</div>
    );
  }

}



export default ReviewItem;
