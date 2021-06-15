import React, { useState, useEffect, useContext } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReviewMeta from './ReviewMeta.jsx';
import ReviewItem from './ReviewItem.jsx';
import ReviewSorting from './ReviewSorting.jsx';
import AddReview from './AddReview.jsx';
import ReviewSearchBar from './ReviewSearchBar.jsx';
import { AppContext } from '../AppComponents/index.js';


function RandR(props) {
  //Get reviews every time productId changes
  const { clickListener } = useContext(AppContext);
  const [characteristics, setCharacteristics] = useState({});
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [productReviewCount, setProductReviewCount] = useState(0);
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
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let newFiltered = brain.filterReviews(filters, reviews);
    newFiltered = brain.searchByKeywords(searchQuery, newFiltered);
    setFiltered(newFiltered);
    if (newFiltered.length < 3) {
      setExpandedView(false);
    }
  }, [filters, reviews, searchQuery]);

  useEffect(() => {
    if (Number(props.productId) && productReviewCount) {
      RandRAPIcalls.getReviews(props.productId, sortBy, productReviewCount)
        .then(response => setReviews(response.data.results));
    }
  }, [props.productId, sortBy, productReviewCount]);

  function handleShowMore() {
    if (expandedView) {
      // window.scrollTo(0, 600);
      setExpandedView(!expandedView);
    } else {
      setExpandedView(!expandedView);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
    }
  }

  return (
    <div id="ratings-and-reviews" className="ratings-and-reviews" onClick={e => clickListener(e, 'Ratings and Reviews')}>
      <h3>RATINGS {'&'} REVIEWS</h3>
      <ReviewSearchBar setSearchQuery={setSearchQuery}/>
      <ReviewMeta meta={reviewsMeta} filters={filters} setFilters={setFilters}/>
      <div className="reviews">
        <ReviewSorting setSortBy={setSortBy} filtered={filtered}/>
        <div className={'gradient-' + expandedView.toString()}>
          <div className="review-list">{brain.renderTwoOrAll(filtered, ReviewItem, expandedView, searchQuery)}</div>
        </div>
        <div>
          {filtered.length > 2 && <button onClick={handleShowMore}>{expandedView ? 'LESS REVIEWS' : 'MORE REVIEWS'}</button>}
          <AddReview productName={props.productName} characteristics={characteristics}
            productId={props.productId} setProductReviewCount={setProductReviewCount} productReviewCount={productReviewCount} />
        </div>
      </div>
    </div>
  );
}

export default RandR;