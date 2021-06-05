import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionSearchBar from './QuestionSearchBar.jsx';
import AdditionalQuestions from './AdditionalQuestions.jsx';

const QandA = (props) => {
  return (
    <div className="QandA">
      <h2>QUESTIONS &amp; ANSWERS</h2>
      < QuestionSearchBar />
      < QuestionList />
      < AdditionalQuestions />
    </div>
  );
};

export default QandA;