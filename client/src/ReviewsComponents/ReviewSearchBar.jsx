import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';

function ReviewSearchBar (props) {
  function handleChange(e) {
    props.setSearchQuery(e.target.value);
  }

  return (
    <form>
      <input type="search" onChange={handleChange}></input>
    </form>
  );
}

export default ReviewSearchBar;