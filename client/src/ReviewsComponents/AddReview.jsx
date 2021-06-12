import React, { useState, useEffect } from 'react';
import GenericModal from '../QandAComponents/GenericModal.jsx';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import InteractiveStars from './InteractiveStars.jsx';
import Characteristics from './Characteristics.jsx';
import UploadPhotos from './UploadPhotos.jsx';

function AddReview(props) {
  let [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const [charValues, setCharValues] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function trackBodyChars(e) {
    setBody(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    let characteristics = brain.formatCharacteristics(charValues, props.characteristics);
    let product_id = props.productId;
    RandRAPIcalls.postReview({
      product_id, rating, summary, body, recommend,
      name, email, photos, characteristics})
      .then(setOpen(false))
      .then(() => props.setProductReviewCount(props.productReviewCount + 1));
  }

  return (
    <span>
      <button onClick={() => setOpen(true)}>ADD A REVIEW</button>
      <GenericModal open={open} onClose={() => setOpen(false)}>
        <div className="add-review">
          <h2>Write Your Review</h2>
          <h4>About the {props.productName}</h4>
          <form onSubmit={handleSubmit}>
            <div>
              {/* Accessiblity input for rating */}
              <label htmlFor='rating' className="sr-only">Rating</label>
              <input type='number' name='rating' min="1" max="5" className="sr-only"
                value={rating} required onChange={(e) => setRating(e.target.value)}></input>
              <InteractiveStars setRating={setRating} />
            </div>
            <div>
              <div>Do you recommend this product?* </div>
              <label htmlFor='recommend'>Yes</label>
              <input type='radio' name='recommend' required onClick={() => setRecommend(true)}></input>
              <label htmlFor='recommend' onClick={() => setRecommend(false)}>No</label>
              <input type='radio' name='recommend'></input>
            </div>
            <Characteristics characteristics={props.characteristics} setCharValues={setCharValues} charValues={charValues} />
            <div>
              <label htmlFor='summary'>Review summary</label><br></br>
              <input type='text' name='summary' placeholder="Example: Best purchase ever!" maxLength="60"
                value={summary} onChange={(e) => setSummary(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor='body'>Review body*</label><br></br>
              <textarea name='body' minLength="50" maxLength="1000" onChange={trackBodyChars} required></textarea>
              <div>{body.length < 50 ? `Minimum required characters left: ${50 - body.length}` : 'Minimum reached'}</div>
            </div>
            <UploadPhotos />
            <div>
              <label htmlFor='nickname'>What is your nickname?*</label><br></br>
              <input type='text' name='nickname' placeholder="Example: jackson11!" required
                value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor='email'>Your email:* </label><br></br>
              <input type='email' name='email' placeholder="Example: jackson11@email.com" required
                value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <input type='submit' name='submit' value="Submit"></input>
          </form>
        </div>
      </GenericModal>
    </span >
  );
}

export default AddReview;
