import React, {useState, useEffect} from 'react';
import QAapiCalls from './QandAAPIcalls.js';
import Answer from './Answer.jsx';
const Question = (props) => {
  let [answers, setAnswer] = useState([]);

  useEffect( () => {
    QAapiCalls.getAnswers(props.info.question_id)
      .then(results => {
        setAnswer(results);
      });
  }, [props.info]);
  return (
    <div>
      <h3>Q:{props.info.question_body} </h3>
      <p>Helpful? </p><p>Yes ({props.info.question_helpfulness})</p>
      <h3>A:</h3>{answers.map( (answer, index) => {
        return <Answer info={answer} key={index}/>;
      })}

    </div>
  );
};
export default Question;