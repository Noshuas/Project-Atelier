import React, { useState, useEffect } from 'react';
import GenericModal from '../QandAComponents/GenericModal.jsx';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';

function AddReview(props) {
  let [open, setOpen] = useState(false);

  const [body, setBody] = useState('');

  function trackBodyChars (e) {
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
            <Characteristics />
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

function Characteristics () {
  return null;
}

export default AddReview;

