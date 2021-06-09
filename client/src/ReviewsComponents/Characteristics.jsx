import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';


let charsTable = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};



function Characteristics(props) {
  let currentChars = Object.keys(props.characteristics);

  return currentChars.map((char, index) => <OneChar char={char} key={index}
    charValues={props.charValues} setCharValues={props.setCharValues} />);
}

function OneChar(props) {
  let char = props.char;
  const [desc, setDesc] = useState(0);

  function handleClick(e) {
    let newObj = { ...props.charValues };
    newObj[char] = e.target.value;
    props.setCharValues(newObj);
    setDesc(e.target.value);
  }

  return (
    <div className="single-char-input">
      <div className="current-selected">{desc ? charsTable[char][desc - 1] : 'None selected'}</div>
      <label htmlFor={char}>{char}:* </label>
      <div className="char-select-container">
        {[1, 2, 3, 4, 5].map(num =>
          <div className="char-uni-selector" key={num}>
            <input type='radio' name={char} value={num} onClick={handleClick} required></input><br></br>
            <label htmlFor={char}>{charsTable[char][num - 1]}</label>
          </div>
        )}
      </div>
    </div>
  );
}

export default Characteristics;