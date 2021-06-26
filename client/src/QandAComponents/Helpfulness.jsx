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
      <>
        <span> Helpful? <button className="link-style-btn" onClick={handleClick}>Yes</button> ({props.helpfulness})
        </span>
      </>
    );
  }
  return (
    <>
      <span> Helpful?  Yes ({props.helpfulness + 1})  </span>
    </>
  );
}

export default Helpfulness;