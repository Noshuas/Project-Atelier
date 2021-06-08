import React, { useState, useEffect } from 'react';
import brain from '../ReviewsComponents/brain.jsx';

function Answer(props) {
  return (
    <div>
      <p>{props.info.body}</p>
      <div className="answersToolbar">
        <p>by {props.info.answerer_name} {brain.getFormatedTimestamp(props.info.date)} </p>
        <p>|</p>
        <p> Helpful? </p>
        <p>Yes </p>
        <p> ({props.info.helpfulness})  </p>
        <p>|</p>
        <p>Report</p>
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