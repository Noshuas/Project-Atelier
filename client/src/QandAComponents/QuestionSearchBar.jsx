import React, { useState } from 'react';

const QuestionSearchBar = (props) => {
  const [filter, setFilter] = useState('');

  let handleChange = function(event) {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  return (
    <div>
      <form id="QandA-search">
        <input type="search" id="questionSearch" name="Qsearch" placeholder="Have a question? Search for answers..." onChange={handleChange}/>
      </form>
    </div>
  );
};

export default QuestionSearchBar;