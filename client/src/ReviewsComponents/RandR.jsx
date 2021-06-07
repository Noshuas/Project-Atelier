import React, { useState, useEffect } from 'react';
import brain from './brain.js';
import APIcalls from './APIcalls';
import ReviewMeta from './ReviewMeta.jsx';
import ReviewItem from './ReviewItem.jsx';
import ReviewSorting from './ReviewSorting.jsx';



function RandR(props) {
  //Get reviews every time productId changes
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');
  useEffect(() => {
    APIcalls.getReviews(props.productId, sortBy)
      .then(response => setReviews(response.data.results));
  }, [props.productId, sortBy]);

  function handleShowMore () {
  }

  //Get reviews every time productId changes
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewCount, setReviewCount] = useState(0);
  useEffect(() => {
    APIcalls.getReviewsMeta(props.productId)
      .then(response => {
        setReviewsMeta(response);
        setReviewCount(brain.getReviewCount(response.data.ratings));
      });
  }, [props.productId]);

  //change to "props.RandR.characteristics
  let characteristics = {};


  return (
    <div className="ratings-and-reviews">
      <h3>RATINGS AND REVIEWS</h3>
      <ReviewMeta />
      <ReviewSorting reviewCount={reviewCount} setSortBy={setSortBy}/>
      <div className="review-list">{reviews.map(review => <ReviewItem key={review.review_id} review={review} />)}</div>
    </div>
  );
}

export default RandR;