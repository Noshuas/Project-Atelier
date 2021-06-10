import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  const [displayedQs, setDisplayed] = useState(2);
  if (!props.expanded) {
    return (
      <div>
        {props.questions.map((question, index) => {
          if (index < 2) {
            return <Question info={question} key={index}/>;
          }
        })}
      </div>
    );
  }
  return (
    <div className='question-list'>
      {props.questions.map((question, index) => {
        if (index < props.questions.length) {
          return <Question info={question} key={index}/>;
        }
      })}
    </div>
  );
};

export default QuestionList;