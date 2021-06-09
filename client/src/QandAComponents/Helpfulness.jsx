import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';

function Helpfulness (props) {

  let [feedback, setFeedback] = useState(false);

  let handleClick = (event) => {
    event.preventDefault();
    QAapiCalls.postHelpfullnessFeedback(props.QorA, props.id, 'helpful')
      .then( (res) => {
        setFeedback(true);
      })
      .catch( (err) => { console.log('err:', err); });
  };
  if (!feedback) {

    return (
      <div>
        <span> Helpful? </span>
        <a href="#" onClick={handleClick}>Yes</a>
        <span> ({props.helpfulness})  </span>
      </div>
    );
  }
  return (
    <div>
      <span> Helpful?  Yes ({props.helpfulness + 1})  </span>
    </div>
  );
}

export default Helpfulness;