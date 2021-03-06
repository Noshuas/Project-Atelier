import React, { useState, useEffect, useContext } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';
import WasHelpful from './WasHelpful.jsx';
import GenericModal from '../QandAComponents/GenericModal.jsx';
import Highlighter from 'react-highlight-words';
import { AppContext } from '../AppComponents/index.js';

function ReviewItem(props) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore(e) {
    e.preventDefault();
    setShowMore(true);
  }

  let { theme } = useContext(AppContext);
  let style = {
    color: theme.text,
  };

  let review = props.review;
  return (
    <div className="review-item">
      <div className="top-row">
        <span><ReadOnlyRatingStars rating={review.rating} /></span>
        <span>{review.reviewer_name}, {brain.getFormatedTimestamp(review.date)}</span>
      </div>
      <Highlighter searchWords={props.searchQuery.split(' ')}
        autoEscape={true}
        textToHighlight={review.summary}
        className={'review-title'}
        unhighlightClassName={'review-title'}
      />
      <p>
        <Highlighter searchWords={props.searchQuery.split(' ')}
          autoEscape={true}
          textToHighlight={showMore ? review.body : review.body.slice(0, 250)}
          className={'review-body'}
          unhighlightClassName={'review-body'}
        />
        {review.body.length > 250 && !showMore && <><span>... </span><a href="#" style={style} onClick={handleShowMore}>show more</a></>}
      </p>
      <Images pics={review.photos} />
      <IRecommmendThisProduct recommend={review.recommend} />
      <ReviewResponse response={review.response} />
      <WasHelpful helpfulness={review.helpfulness} reviewId={review.review_id} />
    </div>
  );
}

function ReviewResponse(props) {
  if (props.response) {
    return (
      <div className="review-response">
        <h4>Response from seller:</h4>
        <p>{props.response}</p>
      </div>
    );
  }
  return null;
}

function HighlightedText(props) {
  return (
    <Highlighter
      searchWords={props.searchQuery.split(' ')}
      autoEscape={true}
      textToHighlight={review.summary}
      className={'review-title'}
    />
  );
}

function IRecommmendThisProduct(props) {
  let { theme } = useContext(AppContext);
  let style = {
    color: theme.body === 'white' ? theme.text : theme.body,
  };

  if (props.recommend) {
    return (
      <div className="recommend-container">
        <i className="fas fa-check"></i>
        <span style={style}> I recommend this product</span>
      </div>
    );
  }
  return null;
}

function Images(props) {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  function handleClick(picUrl) {
    setModalImage(picUrl);
    setOpen(true);
  }


  return (
    <div>{props.pics.map(pic => {
      return (
        <span key={pic.id} >
          <img src={pic.url} onClick={() => handleClick(pic.url)} alt="reviewer's picture - thumbnail"/>
          <GenericModal open={open} onClose={() => setOpen(false)}>
            <img className="modal-image" src={modalImage} alt="reviewer's picture - large" />
          </GenericModal>
        </span>
      );
    })}</div>
  );
}

export default ReviewItem;
