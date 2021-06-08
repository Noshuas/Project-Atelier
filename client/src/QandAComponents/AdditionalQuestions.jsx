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
    setOpen(openValue)
    setValues({question: '', nickname: '', email: ''})
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
    console.log(values);
    // call API

      // then close popup
    setOpen(false)
  };
  return (
    <div>
      <button>More Answered Questions</button>
      <button onClick={() => resetForm(true)}>Add A Question</button>
      <GenericModal open={open} onClose={() => resetForm(false)}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor='question'>Your Question</label>
            <input
              type='text'
              name='question'
              value={values.question}
              onChange={handleQuestionChange}
            />
          </div>
          <div>
            <label htmlFor='nickname'>What is your nickname?</label>
            <input
              type='text'
              name='nickname'
              value={values.nickname}
              onChange={handleNicknameChange}
              placeholder="Example: jackson11!"
            />
          </div>
          <div>
            <label htmlFor='email'>What is your email?</label>
            <input
              type='text'
              name='email'
              value={values.email}
              onChange={handleEmailChange}
              placeholder="Example: jack@email.com"
            />
          </div>
          <input type="submit"/>
        </form>
      </GenericModal>
    </div>
  );
};

export default AdditionalQuestions;