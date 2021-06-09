import React, { useState, useEffect } from 'react';
import RandRAPIcalls from './RandRAPIcalls';

function WasHelpful(props) {
  const [feedbackGiven, setFeedback] = useState(false);
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
        <span>Was this review helpful?</span>
        <span><a href="#" onClick={handleFeedback}>Yes</a> ({props.helpfulness})</span>
        <span>|</span>
        <a href="#" onClick={handleFeedback}>Report</a>
      </div>
    );
  } else {
    return (
      <div className="fadeIn">Thank you for your feedback!</div>
    );
  }
}

export default WasHelpful;