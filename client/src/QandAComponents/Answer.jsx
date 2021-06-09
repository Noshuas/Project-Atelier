import React, { useState, useEffect } from 'react';
import brain from '../ReviewsComponents/brain.jsx';
import Helpfulness from './Helpfulness.jsx';

function Answer(props) {
  return (
    <div>
      <span>{props.info.body}</span>
      <div className="answersToolbar">
        <span>by {props.info.answerer_name} {brain.getFormatedTimestamp(props.info.date)} </span>
        <span>|</span>
        <Helpfulness helpfulness={props.info.helpfulness} QorA='answers' id={props.info.answer_id}/>
        <span>|</span>
        <span>Report</span>
      </div>
      <Photos photos={props.info.photos}/>
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