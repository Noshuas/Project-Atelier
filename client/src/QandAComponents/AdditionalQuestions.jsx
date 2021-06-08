import React, { useState } from 'react';
import GenericModal from './GenericModal.jsx';

const AdditionalQuestions = (props) => {

  let [open, setOpen] = useState(false);

  return (
    <div>
      <button>More Answered Questions</button>
      <button onClick={() => setOpen(true)}>Add A Question</button>
      <GenericModal open={open} onClose={() => setOpen(false)}>
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
      </GenericModal>
    </div>
  );
};

export default AdditionalQuestions;