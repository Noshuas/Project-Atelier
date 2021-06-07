import React from 'react';

const Question = (props) => {
  return (
    <div>
      <h3>Q:{props.info.question_body} </h3>
      <p>Helpful? </p><p>Yes ({props.info.question_helpfulness})</p>
      <div>Answer Component here</div>
    </div>
  );
};

export default Question;