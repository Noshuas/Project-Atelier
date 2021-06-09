import React, { useState, useEffect } from 'react';
import brain from '../ReviewsComponents/brain.jsx';
import Helpfulness from './Helpfulness.jsx';
import QAapiCalls from './QandAAPIcalls.js';

function Answer(props) {
  let [reported, setReported] = useState(false);

  let handleClick = (event) => {
    event.preventDefault();
    QAapiCalls.postHelpfullnessFeedback('answers', props.info.answer_id, 'report')
      .then( (res) => {
        setReported(true);
      })
      .catch( (err) => { console.log('err:', err); });
  };
  if (!reported) {
    return (
      <div>
        <span>{props.info.body}</span>
        <div className="answersToolbar">
          <span>by {props.info.answerer_name} {brain.getFormatedTimestamp(props.info.date)} </span>
          <span>|</span>
          <Helpfulness helpfulness={props.info.helpfulness} QorA='answers' id={props.info.answer_id}/>
          <span>|</span>
          <a href="#" onClick={handleClick}>Report</a>
        </div>
        <Photos photos={props.info.photos}/>
      </div>
    );
  }
  return (
    <div>
      <span>Thank you for reporting this answer.</span>
    </div>
  );
}

function Photos(props) {
  if (props.photos.length === 0) {
    return null;
  }
  return (
    <div className="answer-photos">
      {props.photos.map( (photo, index) => {
        return <Photo info={photo} key={index}/>;
      })}
    </div>
  );
}

function Photo(props) {
  return (
    <div>
      <img className="photo-image" src={props.info.url}/>
    </div>
  );
}

export default Answer;