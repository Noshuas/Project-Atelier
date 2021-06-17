import React, { useState, useEffect } from 'react';
import brain from '../ReviewsComponents/brain.jsx';
import Helpfulness from './Helpfulness.jsx';
import QAapiCalls from './QandAAPIcalls.js';
import GenericModal from './GenericModal.jsx';
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

  return (
    <div className='answer-section'>
      <span>{props.info.body}</span>
      <div className="answersToolbar">
        <span >
          by {props.info.answerer_name} {brain.getFormatedTimestamp(props.info.date)} |
          <Helpfulness helpfulness={props.info.helpfulness} QorA='answers' id={props.info.answer_id}/> | <button className="link-style-btn" onClick={handleClick}>{reported ? 'Reported' : 'Report'}</button>
        </span>
      </div>
      <Photos photos={props.info.photos} answerer={props.info.answerer_name}/>
    </div>
  );

  // If reporting where to delete the answer right away use this :
  // return (
  //   <div>
  //     <span>Thank you for reporting this answer.</span>
  //   </div>
  // );
}

function Photos(props) {
  if (props.photos.length === 0) {
    return null;
  }
  return (
    <div className="answer-photos">
      {props.photos.map( (photo, index) => {
        return <Photo info={photo} key={index} id={index + 1} answerer={props.answerer}/>;
      })}
    </div>
  );
}

function Photo(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <img className="photo-image" src={props.info.url} onClick={() => { setOpen(true); }} alt={`Photo number ${props.id} associated with answer by ${props.answerer} `}/>
      <GenericModal open={open} onClose={() => { setOpen(false); }}>
        <img src={props.info.url} alt={`Enlarged photo number ${props.id} associated with answer by ${props.answerer} `}/>
      </GenericModal>
    </div>
  );
}

export default Answer;