import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionSearchBar from './QuestionSearchBar.jsx';
import AdditionalQuestions from './AdditionalQuestions.jsx';
import QAapiCalls from './QandAAPIcalls.js';
const QandA = (props) => {

  const [questions, setQuestions] = useState([]);
  useEffect (() => {
    QAapiCalls.getQuestions(props.productId)
      .then(results => {
        console.log('resu;ts' , results);
        return setQuestions(results);
      }
      );
  }, [props.productId]);

  return (
    <div className="QandA">
      <h2>QUESTIONS &amp; ANSWERS</h2>
      < QuestionSearchBar />
      < QuestionList questions={questions}/>
      < AdditionalQuestions />
    </div>
  );
};


//QAapiCalls.getQuestions(17068);

export default QandA;