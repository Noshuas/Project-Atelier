import React, { useState, useEffect, useContext } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';
import ReadOnlyRatingStars from './ReadOnlyRatingStars.jsx';
import { AppContext } from '../AppComponents/index.js';


function ReviewMeta(props) {
  let {theme} = useContext(AppContext);

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
      <div className="recommend-percent">{recommendationPercentage}% of reviews recommend this product</div>
      <FactorBreakdown rating={formatedStars} filters={props.filters} setFilters={props.setFilters} />
      <FilterDisplay filters={props.filters} setFilters={props.setFilters} />
      <CharBreakdown chars={formatedChars} />
    </div>
  );
}

export default ReviewMeta;

function FactorBreakdown(props) {
  function handleFilterSetting(e, rating) {
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

  return (
    <div className="progress-containter">
      {props.rating.map(rating => {
        return (
          <div className="progress" key={rating.star}>
            <StarAnchor rating={rating.star} handleFilterSetting={handleFilterSetting} filters={props.filters} />
            <progress max="100" value={rating.percent}></progress>
          </div>
        );
      })}
    </div>
  );
}

function FilterDisplay(props) {
  let {theme} = useContext(AppContext);

  function removeAllFilters(e) {
    e.preventDefault();
    props.setFilters([]);
  }

  let filters = props.filters;
  if (!filters.length) {
    return null;
  }

  return (
    <div className="filter-display fadeIn">
      <h4>Filters:</h4>
      <div>
        {filters.map(filter => <span>{filter} stars</span>)}
      </div>
      <a href="#" style={{color: theme.text}}onClick={removeAllFilters}>Remove all filters</a>
    </div>
  );
}

function StarAnchor(props) {
  let {theme} = useContext(AppContext);

  function handleClick(e) {
    props.handleFilterSetting(e, props.rating);
  }
  return (
    <a href="#" style={{ color: theme.text }} onClick={handleClick}>{props.rating} stars</a>
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