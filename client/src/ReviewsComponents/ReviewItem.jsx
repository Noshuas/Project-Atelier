import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';
import WasHelpful from './WasHelpful.jsx';

function ReviewItem(props) {
  let review = props.review;
  console.log(review);
  return (
    <div className="review-item fadeIn">
      <div className="top-row">
        <span><ReadOnlyRatingStars rating={review.rating}/></span>
        <span>{review.reviewer_name}, {brain.getFormatedTimestamp(review.date)}</span>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <Images pics={review.photos} />
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
      <div className="recommend-container">
        <i className="fas fa-check"></i>
        <span> I recommend this product</span>
      </div>
    );
  }
  return null;
}

function Images (props) {
  let style = {
    display: 'inline-block',
    maxHeight: '100px',
    maxWidth: '100px',
    marginRight: '20px'
  };

  return (
    <div>{props.pics.map(pic => <img style={style} key={pic.id} src={pic.url}/>)}</div>
  );
}

export default ReviewItem;
