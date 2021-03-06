import React, { useState, useEffect, useContext } from 'react';
import RandRAPIcalls from './RandRAPIcalls';
import { AppContext } from '../AppComponents/index.js';

function WasHelpful(props) {
  const [feedbackGiven, setFeedback] = useState(false);
  let {theme} = useContext(AppContext);

  let style = {
    color: theme.text,
  };

  function handleFeedback(e) {
    e.preventDefault();
    let wasHelpful = e.target.text === 'Yes' ? true : false;
    RandRAPIcalls.postHelpfullnessFeedback(props.reviewId, wasHelpful)
      .then((res) => setFeedback(true))
      .catch(() => setFeedback(true));
  }
  if (!feedbackGiven) {
    return (
      <div className="was-helpful">
        <span>Helpful?</span>
        <span><a href="#" onClick={handleFeedback} style={style}>Yes</a> ({props.helpfulness})</span>
        <span>|</span>
        <span><a href="#" onClick={handleFeedback} style={style}>Report</a></span>
      </div>
    );
  } else {
    return (
      <div className="fadeIn">Thank you for your feedback!</div>
    );
  }
}

export default WasHelpful;