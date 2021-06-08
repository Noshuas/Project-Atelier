import React, { useState, useEffect } from 'react';

function WasHelpful(props) {
  const [feedbackGiven, setFeedback] = useState(false);
  function handleFeedback(e) {
    e.preventDefault();
    setFeedback(true);
  }
  if (!feedbackGiven) {
    return (
      <div className="was-helpful">
        <span>Was this review helpful?</span>
        <span><a href="#" onClick={handleFeedback}>Yes</a> ({props.helpfulness})</span>
        <span>|</span>
        <a href="#" onClick={handleFeedback}>No</a>
      </div>
    );
  } else {
    return (
      <div>Thank you for your feedback!</div>
    );
  }
}

export default WasHelpful;