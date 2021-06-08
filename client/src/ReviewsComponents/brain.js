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
  cssReady.push([0, 6, 8, 10, 15][partial * 4]);
  while (cssReady.length < 5) {
    cssReady.push(0);
  }
  return cssReady;
};

export default brain;
