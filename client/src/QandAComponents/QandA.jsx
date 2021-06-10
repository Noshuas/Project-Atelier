import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionSearchBar from './QuestionSearchBar.jsx';
import AddNewQuestion from './AddNewQuestion.jsx';
import QAapiCalls from './QandAAPIcalls.js';

const QandA = (props) => {

  const [questions, setQuestions] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect (() => {
    QAapiCalls.getQuestions(props.productId)
      .then(results => {
        return setQuestions(results);
      }
      );
  }, [props.productId]);

  function handleMoreQuestions (event) {
    setExpanded(!expanded);
  }

  return (
    <div className="QandA">
      <h2>QUESTIONS &amp; ANSWERS</h2>
      < QuestionSearchBar />
      < QuestionList questions={questions} expanded={expanded}/>
      <div>
        < AddNewQuestion productId={props.productId}/>
        <button onClick={handleMoreQuestions}>{!expanded ? 'More Answered Questions' : 'Show Less Answered Questions'}</button>
      </div>
    </div>
  );
};


export default QandA;