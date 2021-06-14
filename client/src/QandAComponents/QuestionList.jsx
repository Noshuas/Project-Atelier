import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  if (!props.expanded) {
    return (
<<<<<<< HEAD
      <div data-testid="question-list">
=======
      <div data-testid='question-list' className='question-list' >
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
        {props.questions.map((question, index) => {
          if (index < 2) {
            return <Question info={question} key={index} productName={props.productName}/>;
          }
        })}
      </div>
    );
  }
  return (
<<<<<<< HEAD
    <div data-testid="question-list" className='question-list'>
=======
    <div data-testid='question-list' className='question-list'>
>>>>>>> 8b6dc39e7f4889281799365436dc3946d11d1aa5
      {props.questions.map((question, index) => {
        if (index < props.questions.length) {
          return <Question info={question} key={index} productName={props.productName}/>;
        }
      })}
    </div>
  );
};

export default QuestionList;