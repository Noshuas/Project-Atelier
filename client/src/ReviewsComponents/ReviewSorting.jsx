import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';

function ReviewSorting(props) {
  const [selected, setSelected] = useState('relevance');
  function handleSelect (e) {
    setSelected(e.target.value);
    props.setSortBy(brain.getFormatedSortBy(e.target.value));
  }

  return (
    <div className="review-sorting">
      <h3>{props.reviewCount} {'reviews, sorted by '}
        <select name="sort-selection" value={selected} onChange={handleSelect}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
          <option value="helpfulness">helpfulness</option>
        </select>
      </h3>
    </div>
  );
}

export default ReviewSorting;