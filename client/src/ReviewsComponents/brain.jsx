import React, { useState, useEffect } from 'react';

let brain = {};

brain.getFormatedTimestamp = function (string) {
  let date = new Date(string);
  let result = '';
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  result += month[date.getMonth()] + ' ';
  result += (date.getDate() + 1) + ', ';
  result += date.getFullYear();
  return result;
};

brain.getReviewCount = function (ratings) {
  let total = 0;
  for (let rating in ratings) {
    total += Number(ratings[rating]);
  }
  return total;
};

brain.getFormatedSortBy = function (string) {
  if (string === 'relevance') {
    return 'relevant';
  } else if (string === 'helpfulness') {
    return 'helpful';
  } else {
    return 'newest';
  }
};

//outputs Array of corresponding star filling lengths in pixels
brain.formatStarRating = function (rating) {
  let wholes = Math.floor(rating);
  let partial = rating - wholes;
  partial = (Math.round(partial * 4) / 4).toFixed(2);
  let cssReady = Array(wholes).fill(15);
  if (cssReady.length < 5) {
    cssReady.push([0, 6, 8, 10, 15][partial * 4]);
  }
  while (cssReady.length < 5) {
    cssReady.push(0);
  }
  return cssReady;
};

brain.renderTwoOrAll = function (list, Component, expanded) {
  if (!expanded) {
    let result = [];
    for (var i = 0; i < 2 && i < list.length; i++) {
      result.push(<Component review={list[i]} key={list[i].review_id} />);
    }
    return result;
  }

  return (
    list.map((review, index) => <Component key={review.review_id} review={review} />)
  );
};

brain.formatCharacteristics = function (charValues, charTemplate) {
  let formated = {};
  for (let char in charTemplate) {
    formated[charTemplate[char].id] = Number(charValues[char]);
  }
  return formated;
};

brain.formatCharsForDisplay = function (data) {
  if (!data) {
    return [];
  } else {
    let chars = data.characteristics;
    let formated = [];

    for (let char in chars) {
      let single = {};
      single.char = char;
      single.percent = Math.round(Number(chars[char].value) / 5 * 100);
      formated.push(single);
    }

    console.log(formated);
    return [];
  }
};

brain.formatRatings = function (data) {
  if (!data) {
    return [];
  } else {
    let totalReviews = Number(data.recommended.false) + Number(data.recommended.true);
    let ratios = [];

    for (let rating in data.ratings) {
      let ratio = {};
      ratio.star = rating;
      ratio.percent = Math.round(Number(data.ratings[rating]) / totalReviews * 100);
      ratios.push(ratio);
    }

    return ratios;
  }
};

brain.getAverageRating = function (data) {
  if (!data) {
    return '0.0';
  } else {
    let totalReviews = Number(data.recommended.false) + Number(data.recommended.true);
    let ratingSum = 0;

    for (let rating in data.ratings) {
      ratingSum += Number(rating) * Number(data.ratings[rating]);
    }

    return (Math.round(ratingSum / totalReviews * 10) / 10).toString();
  }
};

brain.getRecommanendationPercentage = function (data) {
  if (!data) {
    return '0';
  } else {
    let totalReviews = Number(data.recommended.false) + Number(data.recommended.true);
    let percentage = Math.round(Number((data.recommended.true) / totalReviews) * 100);
    return percentage.toString();
  }
};



export default brain;
