import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  const [displayedQs, setDisplayed] = useState(2);
  return (
    <div>
      {props.questions.map((question, index) => {
        if (index < displayedQs) {
          return <Question info={question} key={index}/>;
        }
      })}
    </div>
  );
};

export default QuestionList;