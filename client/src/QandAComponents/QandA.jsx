import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionSearchBar from './QuestionSearchBar.jsx';
import AddNewQuestion from './AddNewQuestion.jsx';
import QAapiCalls from './QandAAPIcalls.js';
import Helpers from './Helpers.js';

const QandA = (props) => {

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState('');

  function handleChange(event) {
    setFilter(event.target.value);
  }

  useEffect (() => {
    QAapiCalls.getQuestions(props.productId)
      .then(results => {
        setFilteredQuestions(results);
        return setQuestions(results);
      }
      );
  }, [props.productId]);

  useEffect ( () => {
    let searchTerm = '';
    if (filter.length > 2) {
      searchTerm = filter;
    } else {
      searchTerm = '';
    }
    setFilteredQuestions(questions.filter( (question) => {
      // use this to just check questions
      //return question.question_body.includes(searchTerm);
      return Helpers.findTermInQuestion(question, searchTerm);
    }));
  }, [filter]);
  function handleMoreQuestions (event) {
    setExpanded(!expanded);
  }
  if (questions.length === 0) {
    return (
      <div className="QandA">
        <h2>QUESTIONS &amp; ANSWERS</h2>
        < AddNewQuestion productId={props.productId} productName={props.productName}/>
      </div>
    );
  }
  return (
    <div className="QandA">
      <h2>QUESTIONS &amp; ANSWERS</h2>
      < QuestionSearchBar handleChange={handleChange}/>
      < QuestionList questions={filteredQuestions} expanded={expanded} productName={props.productName}/>
      <div>
        < AddNewQuestion productId={props.productId} productName={props.productName}/>
        <button onClick={handleMoreQuestions}>{!expanded ? 'More Answered Questions' : 'Show Less Answered Questions'}</button>
      </div>
    </div>
  );
};


export default QandA;