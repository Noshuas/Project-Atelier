import React, { useState, useEffect, useContext } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import { AppContext } from '../AppComponents/index.js';

function ReviewSorting(props) {
  const [selected, setSelected] = useState('relevance');
  let {theme} = useContext(AppContext);

  let style = {
    color: theme.text,
    borderColor: theme.text,
    backgroundColor: theme.body
  };

  function handleSelect (e) {
    setSelected(e.target.value);
    props.setSortBy(brain.getFormatedSortBy(e.target.value));
  }

  return (
    <div className="review-sorting">
      <h3 style={style}>{props.filtered.length} {'reviews, sorted by '}
        <select name="sort-selection" value={selected} onChange={handleSelect} style={style}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
          <option value="helpfulness">helpfulness</option>
        </select>
      </h3>
    </div>
  );
}

export default ReviewSorting;