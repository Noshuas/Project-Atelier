import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => {
  if (!props.moreAnswers) {
    return (
      <div>
        {props.answers.map((answer, index) => {
          if (index < 2) {
            return <Answer info={answer} key={index}/>;
          }
        })}
        <ExandAnswers handleMoreAnswers={props.handleMoreAnswers} numAnswers={props.answers.length}/>
      </div>
    );
  }
  return (
    <div className='answer-list'>
      {props.answers.map((answer, index) => {
        if (index < props.answers.length) {
          return <Answer info={answer} key={index}/>;
        }
      })}
      <button className='link-style-btn' onClick={props.handleMoreAnswers}>Collapse answers</button>
    </div>
  );
};

function ExandAnswers(props) {
  if (props.numAnswers === 0) {
    return <span>This question currently has no answers</span>;
  }
  if (props.numAnswers > 2) {
    return <button className='link-style-btn' onClick={props.handleMoreAnswers}> See more answers</button>;
  }
  return null;
}

export default AnswerList;