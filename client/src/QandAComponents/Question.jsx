import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';
import Answer from './Answer.jsx';
import GenericModal from './GenericModal.jsx';

const Question = (props) => {
  let [answers, setAnswer] = useState([]);
  let [open, setOpen] = useState(false);

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
        <p>Helpful? </p>
        <p>Yes ({props.info.question_helpfulness})</p>
        <button onClick={() => setOpen(true)}>Add Answer</button>
      </div>
      <h3>A:</h3>{answers.map( (answer, index) => {
        return <Answer info={answer} key={index}/>;
      })}
      <GenericModal open={open} onClose={() => setOpen(false)}>
        <form action=''>
          <div>
            <label htmlFor='answer'>Your Answer</label>
            <input type='text' name='answer'></input>
          </div>
          <div>
            <label htmlFor='nickname'>What is your nickname?</label>
            <input type='text' name='nickname' placeholder="Example: jackson11!"></input>
          </div>
          <div>
            <label htmlFor='email'>What is your email?</label>
            <input type='text' name='email' placeholder="Example: jack@email.com"></input>
          </div>
          <button onClick={() => setOpen(false)}>Submit Question</button>
        </form>
      </GenericModal>
    </div>
  );
};
export default Question;