import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';

function Helpfulness (props) {
  let handleClick = (event) => {
    console.log('test');
    event.preventDefault();
    QAapiCalls.postHelpfullnessFeedback(props.QorA, props.id, 'helpful')
      .then( (res) => { console.log('success'); })
      .catch( (err) => { console.log('err:', err); });
  };

  return (
    <div>
      <span> Helpful? </span>
      <a href="#" onClick={handleClick}>Yes</a>
      <span> ({props.helpfulness})  </span>
    </div>
  );
}

export default Helpfulness;