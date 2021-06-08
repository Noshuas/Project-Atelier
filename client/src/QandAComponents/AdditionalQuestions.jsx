import React, { useState } from 'react';
import QuestionsModal from './AddQuestionsModal.jsx';

const AdditionalQuestions = (props) => {

  let [open, setOpen] = useState(false);

  return (
    <div>
      <button>More Answered Questions</button>
      <button onClick={() => setOpen(true)}>Add A Question</button>
      <QuestionsModal open={open} onClose={() => setOpen(false)}>
      sf
        <form>
          <div>
            <label htmlFor='question'>Your Question</label>
            <input type='text' name='question'></input>
          </div>
          <div>
            <label htmlFor='nickname'>What is your nickname?</label>
            <input type='text' name='nickname' placeholder="Example: jackson11!"></input>
          </div>
          <button onClick={() => setOpen(false)}>Submit Question</button>
        </form>
      </QuestionsModal>
    </div>
  );
};

export default AdditionalQuestions;