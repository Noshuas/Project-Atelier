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
  const [productReviewCount, setProductReviewCount] = useState(2);
  useEffect(() => {
    if (Number(props.productId) > 0) {
      RandRAPIcalls.getReviewsMeta(props.productId)
        .then(response => {
          setReviewsMeta(response);
          setProductReviewCount(brain.getReviewCount(response.data.ratings));
          setCharacteristics(response.data.characteristics);
        });
    }
  }, [props.productId]);

  //Get reviews every time productId changes
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');
  const [expandedView, setExpandedView] = useState(false);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    if (Number(props.productId) > 0) {
      RandRAPIcalls.getReviews(props.productId, sortBy, productReviewCount)
        .then(response => setReviews(response.data.results));
    }
  }, [props.productId, sortBy, productReviewCount]);

  useEffect(() => setProductReviewCount(reviews.length), [reviews]);


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
    <div id="ratings-and-reviews" className="ratings-and-reviews">
      <h3>RATINGS {'&'} REVIEWS</h3>
      <ReviewMeta meta={reviewsMeta} filters={filters} setFilters={setFilters}/>
      <div className="reviews">
        <ReviewSorting reviews={reviews} setSortBy={setSortBy} filters={filters}/>
        <div className="review-list">{brain.renderTwoOrAll(brain.filterReviews(filters, reviews), ReviewItem, expandedView)}</div>
        <div>
          <button onClick={handleShowMore}>{expandedView ? 'LESS REVIEWS' : 'MORE REVIEWS'}</button>
          <AddReview productName={props.productName} characteristics={characteristics}
            productId={props.productId} setProductReviewCount={setProductReviewCount} productReviewCount={productReviewCount} />
        </div>
      </div>
    </div>
  );
}

export default RandR;

//brain.filterReviews(filters, response.data.results)