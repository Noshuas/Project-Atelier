import React from 'react';
import QAapiCalls from './QandAAPIcalls.js'

const Question = (props) => {
  QAapiCalls.getAnswers(props.info.question_id);

  return (
    <div>
      <h3>Q:{props.info.question_body} </h3>
      <p>Helpful? </p><p>Yes ({props.info.question_helpfulness})</p>
      <div>Answer Component here</div>
    </div>
  );
};
export default Question;