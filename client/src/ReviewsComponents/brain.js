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

export default brain;
