import React, { useState } from 'react';
import QuestionsModal from './AddQuestionsModal.jsx';

const AdditionalQuestions = (props) => {

  let [open, setOpen] = useState(false);

  return (
    <div>
      <button>More Answered Questions</button>
      <button onClick={() => setOpen(true)}>Add A Question</button>
      <QuestionsModal open={open}>
        Test
      </QuestionsModal>
    </div>
  );
};

export default AdditionalQuestions;