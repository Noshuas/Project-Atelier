import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';
import Answer from './Answer.jsx';
import GenericModal from './GenericModal.jsx';
import QandAAPIcalls from './QandAAPIcalls.js';
import Helpfulness from './Helpfulness.jsx';
import AnswerList from './AnswerList.jsx';

const Question = (props) => {
  let [answers, setAnswer] = useState([]);
  let [open, setOpen] = useState(false);
  let [moreAnswers, setMoreAnswers] = useState(false);
  let [answersSubmitted, setAnswersSubmitted] = useState(0);
  let [values, setValues] = useState({
    answer: '',
    nickname: '',
    email: ''
  });
  const handleMoreAnswers = (event) => {
    event.preventDefault();
    setMoreAnswers(!moreAnswers);
  };
  const resetForm = (openValue) => {
    setOpen(openValue);
    setValues({answer: '', nickname: '', email: ''});
  };
  const handleAnswerChange = (event) => {
    setValues({...values, answer: event.target.value});
  };
  const handleNicknameChange = (event) => {
    setValues({...values, nickname: event.target.value});
  };
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value});
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    QandAAPIcalls.postAnswer(values, props.info.question_id)
      .then(response => {
        console.log('successs', response);
        setAnswersSubmitted(answersSubmitted + 1);
        resetForm(false);
      })
      .catch(err => { console.log('err', err); });

  };
  const handleAddAnswer = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  useEffect( () => {
    QAapiCalls.getAnswers(props.info.question_id)
      .then(results => {
        setAnswer(results);
      });
  }, [props.info, answersSubmitted, moreAnswers]);
  return (
    <div className='question-section'>
      <div className="question-main">
        <h3 className="question-body">Q: {props.info.question_body} </h3>
        <div className="question-toolbar">
          <span>
            <Helpfulness helpfulness={props.info.question_helpfulness} QorA='questions' id={props.info.question_id}/> | <button className="link-style-btn" onClick={handleAddAnswer}>Add Answer</button>
          </span>
        </div>
      </div>
      <div className="answer-component">
        <h3>A:</h3>
        <AnswerList answers={answers} moreAnswers={moreAnswers} handleMoreAnswers={handleMoreAnswers}/>
      </div>
      <GenericModal open={open} onClose={() => resetForm(false)}>
        <form onSubmit={handleFormSubmit} className="QnA-form">
          <h1>Submit your Answer</h1>
          <h2>{props.productName}: {props.info.question_body}</h2>
          <label htmlFor='answer'>Your Answer
            <span className='red-asterisk'>*</span>
          </label>
          <textarea
            name='answer'
            value={values.answer}
            onChange={handleAnswerChange}
            maxLength='1000'
            rows= '5'
            cols='40'
            required
          />
          <label htmlFor='nickname'>What is your nickname?
            <span className='red-asterisk'>*</span>
          </label>
          <input
            type='text'
            name='nickname'
            className='form-input-txt'
            value={values.nickname}
            onChange={handleNicknameChange}
            placeholder="Example: jackson11!"
            maxLength='60'
            required
          />
          <span>For privacy reasons, do not use your full name or email address</span>
          <label htmlFor='email'>What is your email?
            <span className='red-asterisk'>*</span>
          </label>
          <input
            type='email'
            name='email'
            className='form-input-txt'
            value={values.email}
            onChange={handleEmailChange}
            placeholder="Example: jack@email.com"
            maxLength='60'
            required
          />
          <span>For authentication reasons, you will not be emailed</span>
          <input className="form-submit-btn" type="submit"/>
        </form>
      </GenericModal>
    </div>
  );
};
export default Question;