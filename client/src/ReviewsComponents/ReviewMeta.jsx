import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';

function ReviewMeta(props) {
  let formatedStars = brain.formatRatings(props.meta.data);
  let formatedChars = brain.formatCharsForDisplay(props.meta.data);
  let average = brain.getAverageRating(props.meta.data);
  let recommendationPercentage = brain.getRecommanendationPercentage(props.meta.data);

  return (
    <div className="ratings">
      <div className="main">
        <div className="average-rating">{average}</div>
        <ReadOnlyRatingStars rating={average} />
      </div>
      <div>{recommendationPercentage}% of reviews recommend this product</div>
      <FactorBreakdown rating={formatedStars} filters={props.filters} setFilters={props.setFilters}/>
      <CharBreakdown chars={formatedChars} />
    </div>
  );
}

export default ReviewMeta;

function FactorBreakdown(props) {
  function handleFilterSetting (e, rating) {
    e.preventDefault();
    let clickedStar = Number(rating);
    if (props.filters.includes(clickedStar)) {
      let newFilter = props.filters.filter((i) => i !== clickedStar);
      props.setFilters(newFilter);
    } else {
      let newFilter = [...props.filters, clickedStar];
      props.setFilters(newFilter);
    }
  }

  function styling (rating) {
    console.log(rating);
    return {
      fontWeight: props.filters.includes(rating) ? 'bold' : 'normal'
    };
  }

  return (
    <div className="progress-containter">
      {props.rating.map(rating => {
        return (
          <div className="progress" key={rating.star}>
            <StarAnchor rating={rating.star} handleFilterSetting={handleFilterSetting} />
            <progress max="100" value={rating.percent}></progress>
          </div>
        );
      })}
    </div>
  );
}

function StarAnchor (props) {
  const [fontWeight, setFontWeight] = useState('normal');

  function handleClick (e) {
    props.handleFilterSetting(e, props.rating);
    setFontWeight(fontWeight === 'bold' ? 'normal' : 'bold');
  }


  return (
    <a href="#" style={{fontWeight: fontWeight}} onClick={handleClick}>{props.rating} stars</a>
  );
}

function CharBreakdown(props) {
  return (
    <div className="char-containter">
      {props.chars.map(char => {
        return (
          <div key={char.char}>
            <div>{char.char}</div>
            <div className="char-bar">
              <div className="char-bar-value" style={{ width: char.percent + '%' }}>
                <div className="arrow"></div>
              </div>
            </div>
            <div className="char-endpoints"><span>{char.low}</span><span>{char.high}</span></div>
          </div>
        );
      })}
    </div>
  );
}