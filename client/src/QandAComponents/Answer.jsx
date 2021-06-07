import React, { useState, useEffect } from 'react';
import brain from '../ReviewsComponents/brain.js';

function Answer(props) {
  return (
    <div>
      <p>{props.info.body}</p>
      <div className="answersToolbar">
        <p>by {props.info.answerer_name} {brain.getFormatedTimestamp(props.info.date)} </p>
        <p> Helpful? </p>
        <p>Yes </p>
        <p> ({props.info.helpfulness})  </p>
        <button> Report </button>
      </div>
      <Photos photos={props.info.photos}/>
    </div>
  );
}

function Photo(props) {
  if (props.photos.length === 0) {
    return null;
  }
  return (
    <div className="answer-photos">A photo

    </div>
  )
}

export default Answer;