import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question, index) => {
        return <Question info={question} key={index}/>;
      })}
    </div>
  );
};

export default QuestionList;