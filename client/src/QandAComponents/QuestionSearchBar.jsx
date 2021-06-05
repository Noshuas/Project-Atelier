import React from 'react';

const QuestionSearchBar = (props) => {
  return (
    <div>
      <form id="QandA-search">
        <input type="search" id="questionSearch" name="Qsearch" placeholder="Have a question? Search for answers..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default QuestionSearchBar;