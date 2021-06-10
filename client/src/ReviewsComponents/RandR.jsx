import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReviewMeta from './ReviewMeta.jsx';
import ReviewItem from './ReviewItem.jsx';
import ReviewSorting from './ReviewSorting.jsx';
import AddReview from './AddReview.jsx';



function RandR(props) {
  //Get reviews every time productId changes
  const [characteristics, setCharacteristics] = useState({});
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewCount, setReviewCount] = useState(2);
  useEffect(() => {
    RandRAPIcalls.getReviewsMeta(props.productId)
      .then(response => {
        setReviewsMeta(response);
        setReviewCount(brain.getReviewCount(response.data.ratings));
        setCharacteristics(response.data.characteristics);
      });
  }, [props.productId]);

  //Get reviews every time productId changes
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');
  const [expandedView, setExpandedView] = useState(false);
  useEffect(() => {
    RandRAPIcalls.getReviews(props.productId, sortBy, reviewCount)
      .then(response => setReviews(response.data.results));
  }, [props.productId, sortBy, reviewCount]);

  useEffect(() => setReviewCount(reviews.length), [reviews]);

  function handleShowMore() {
    if (expandedView) {
      window.scrollTo(0, 600);
      setTimeout(() => setExpandedView(!expandedView), 400);
    } else {
      setExpandedView(!expandedView);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
    }
  }

  return (
    <div className="ratings-and-reviews">
      <h3>RATINGS AND REVIEWS</h3>
      <ReviewMeta />
      <ReviewSorting reviewCount={reviewCount} setSortBy={setSortBy} />
      <div className="right-side">
        <div className="review-list">{brain.renderTwoOrAll(reviews, ReviewItem, expandedView)}</div>
        <div>
          <button onClick={handleShowMore}>{expandedView ? 'LESS REVIEWS' : 'MORE REVIEWS'}</button>
          <AddReview productName={props.productName} characteristics={characteristics}
            productId={props.productId} setReviewCount={setReviewCount} reviewCount={reviewCount}/>
        </div>
      </div>
    </div>
  );
}

export default RandR;
