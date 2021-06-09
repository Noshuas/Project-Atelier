import React, { useState } from 'react';
import GenericModal from './GenericModal.jsx';
import QandAAPIcalls from './QandAAPIcalls.js';
const AdditionalQuestions = (props) => {

  let [open, setOpen] = useState(false);
  let [values, setValues] = useState({
    question: '',
    nickname: '',
    email: ''
  });
  const resetForm = (openValue) => {
    setOpen(openValue);
    setValues({question: '', nickname: '', email: ''});
  };
  const handleQuestionChange = (event) => {
    setValues({...values, question: event.target.value});
  };
  const handleNicknameChange = (event) => {
    setValues({...values, nickname: event.target.value});
  };
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value});
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    QandAAPIcalls.postQuestion(values, props.productId)
      .then(response => {
        console.log('successs', response);
        setOpen(false);
      })
      .catch(err => {console.log('err', err); });
  };
  return (
    <div>
      <button>More Answered Questions</button>
      <button onClick={() => resetForm(true)}>Add A Question</button>
      <GenericModal open={open} onClose={() => resetForm(false)}>
        <form onSubmit={handleFormSubmit} className="QnA-form">
          <label htmlFor='question'>Your Question</label>
          <input
            type='text'
            name='question'
            value={values.question}
            onChange={handleQuestionChange}
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

export default AdditionalQuestions;