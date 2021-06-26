import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';

function ReviewSearchBar(props) {
  function handleChange(e) {
    if (e.target.value.length > 2) {
      props.setSearchQuery(e.target.value);
    } else {
      props.setSearchQuery('');
    }
  }

  return (
    <form id="review-search-bar" onSubmit={e => e.preventDefault()}>
      <input type="search" onChange={handleChange} placeholder="search reviews"></input>
      <i className="fas fa-search"></i>
    </form>
  );
}

export default ReviewSearchBar;