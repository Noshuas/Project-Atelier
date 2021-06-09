import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';
import Answer from './Answer.jsx';
import GenericModal from './GenericModal.jsx';
import QandAAPIcalls from './QandAAPIcalls.js';
import Helpfulness from './Helpfulness.jsx';

const Question = (props) => {
  let [answers, setAnswer] = useState([]);
  let [open, setOpen] = useState(false);
  let [values, setValues] = useState({
    answer: '',
    nickname: '',
    email: ''
  });
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
        setOpen(false);
      })
      .catch(err => {console.log('err', err); });
  };
  useEffect( () => {
    QAapiCalls.getAnswers(props.info.question_id)
      .then(results => {
        setAnswer(results);
      });
  }, [props.info]);
  return (
    <div>
      <h3>Q:{props.info.question_body} </h3>
      <div className="question-toolbar">
        <Helpfulness helpfulness={props.info.question_helpfulness} QorA='questions' id={props.info.question_id}/>
        <button onClick={() => setOpen(true)}>Add Answer</button>
      </div>
      <h3>A:</h3>{answers.map( (answer, index) => {
        return <Answer info={answer} key={index}/>;
      })}
      <GenericModal open={open} onClose={() => resetForm(false)}>
        <form onSubmit={handleFormSubmit} className="QnA-form">
          <label htmlFor='answer'>Your Answer</label>
          <input
            type='text'
            name='answer'
            value={values.answer}
            onChange={handleAnswerChange}
            maxLength='1000'
            size= '60'
            required
          />
          <label htmlFor='nickname'>What is your nickname?</label>
          <input
            type='text'
            name='nickname'
            value={values.nickname}
            onChange={handleNicknameChange}
            placeholder="Example: jackson11!"
            maxLength='60'
            required
          />
          <span>For privacy reasons, do not use your full name or email address</span>
          <label htmlFor='email'>What is your email?</label>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleEmailChange}
            placeholder="Example: jack@email.com"
            maxLength='60'
            required
          />
          <span>For authentication reasons, you will not be emailed</span>
          <input type="submit"/>
        </form>
      </GenericModal>
    </div>
  );
};
export default Question;