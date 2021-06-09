import React, { useState, useEffect } from 'react';
import GenericModal from '../QandAComponents/GenericModal.jsx';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';

function AddReview(props) {
  let [open, setOpen] = useState(false);

  const [charValues, setCharValues] = useState({});
  const [body, setBody] = useState('');

  function trackBodyChars(e) {
    setBody(e.target.value);

  }

  return (
    <span>
      <button onClick={() => setOpen(true)}>ADD A REVIEW</button>
      <GenericModal open={open} onClose={() => setOpen(false)}>
        <div className="add-review">
          <h2>Write Your Review</h2>
          <h4>About the {props.productName}</h4>
          <form>
            <div>
              <div>Do you recommend this product?* </div>
              <label htmlFor='recommend'>Yes</label>
              <input type='radio' name='recommend' required></input>
              <label htmlFor='recommend'>No</label>
              <input type='radio' name='recommend'></input>
            </div>
            <Characteristics characteristics={props.characteristics} />
            <div>
              <label htmlFor='summary'>Review summary</label><br></br>
              <input type='text' name='summary' placeholder="Example: Best purchase ever!" maxLength="60"></input>
            </div>
            <div>
              <label htmlFor='body'>Review body*</label><br></br>
              <textarea name='body' minLength="50" maxLength="1000" onChange={trackBodyChars} required></textarea>
              <div>{body.length < 50 ? `Minimum required characters left: ${50 - body.length}` : 'Minimum reached'}</div>
            </div>
            <div>
              <label htmlFor='photos'>Upload photos</label><br></br>
              <input type='file' name='photos'></input>
            </div>
            <div>
              <label htmlFor='nickname'>What is your nickname?*</label><br></br>
              <input type='text' name='nickname' placeholder="Example: jackson11!" required></input>
            </div>
            <div>
              <label htmlFor='email'>Your email:* </label><br></br>
              <input type='email' name='email' placeholder="Example: jackson11@email.com" required></input>
            </div>
            <input type='submit' name='submit' value="Submit"></input>
          </form>
        </div>
      </GenericModal>
    </span >
  );
}

export default AddReview;

//-------------------------------------------------

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

  return currentChars.map((char, index) => <OneChar char={char} key={index}/>);
}

function OneChar(props) {
  let char = props.char;
  return (
    <div>
      <label htmlFor={char}>{char}:* </label><br></br>
      <input type='radio' name={char} value="1" required></input>
      <input type='radio' name={char} value="2"></input>
      <input type='radio' name={char} value="3"></input>
      <input type='radio' name={char} value="4"></input>
      <input type='radio' name={char} value="5"></input>
    </div>
  );
}


