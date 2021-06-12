import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';
import WasHelpful from './WasHelpful.jsx';
import GenericModal from '../QandAComponents/GenericModal.jsx';

function ReviewItem(props) {
  let review = props.review;
  return (
    <div className="review-item fadeIn">
      <div className="top-row">
        <span><ReadOnlyRatingStars rating={review.rating} /></span>
        <span>{review.reviewer_name}, {brain.getFormatedTimestamp(review.date)}</span>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
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

function IRecommmendThisProduct(props) {
  if (props.recommend) {
    return (
      <div className="recommend-container">
        <i className="fas fa-check"></i>
        <span> I recommend this product</span>
      </div>
    );
  }
  return null;
}

function Images(props) {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  function handleClick (picUrl) {
    setModalImage(picUrl);
    setOpen(true);
  }


  return (
    <div>{props.pics.map(pic => {
      return (
        <span key={pic.id} >
          <img src={pic.url} onClick={() => handleClick(pic.url)}/>
          <GenericModal open={open} onClose={() => setOpen(false)}>
            <img className="modal-image" src={modalImage} />
          </GenericModal>
        </span>
      );
    })}</div>
  );
}

export default ReviewItem;
