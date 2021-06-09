import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import RatingStars from './RatingStars.jsx';

let desc = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

function InteractiveStars(props) {
  const [chosenRating, setChosenRating] = useState(0);
  const [formatedRating, setFormatedRating] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    setFormatedRating(brain.formatStarRating(chosenRating));
    props.setRating(chosenRating);
  }, [chosenRating]);

  let style = {
    // marginBottom: '7px',
    height: '70px'
  };

  return (
    <div className="rating-stars" style={style}>
      {formatedRating.map((num, index) => <Star width={num * 20}
        setChosenRating={setChosenRating}
        num={index + 1}
        key={index}
      />)}
      <span style={{fontSize: '35px'}}>{chosenRating > 0 ? desc[chosenRating - 1] : null}</span>
    </div>
  );
}

function Star(props) {
  function handleClick () {
    props.setChosenRating(props.num);
  }

  let style = {
    paddingRight: '50px',
  };

  return (
    <div className="star-container" style={style} onClick={handleClick}>
      <i className="fas fa-star" style={{ width: props.width, fontSize: '35px' }}></i>
      <i className="far fa-star" style={{ fontSize: '35px' }}></i>
    </div>
  );
}

export default InteractiveStars;