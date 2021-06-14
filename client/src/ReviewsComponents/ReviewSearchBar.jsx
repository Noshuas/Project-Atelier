import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';

function ReviewSearchBar (props) {
  function handleChange(e) {
    if (e.target.value.length > 2) {
      props.setSearchQuery(e.target.value);
    } else {
      props.setSearchQuery('');
    }
  }

  return (
    <form>
      <input type="search" onChange={handleChange}></input>
    </form>
  );
}

export default ReviewSearchBar;