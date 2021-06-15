import React, { useState } from 'react';

const QuestionSearchBar = (props) => {

  return (
    <div>
      <form id="QandA-search">
        <input type="search" id="questionSearch" name="Qsearch" placeholder="Have a question? Search for answers..." onChange={props.handleChange}/>
        <i className="fas fa-search"></i>
      </form>
    </div>
  );
};

export default QuestionSearchBar;