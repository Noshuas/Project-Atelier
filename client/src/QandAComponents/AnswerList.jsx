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
    </div>
  );
};

export default AnswerList;