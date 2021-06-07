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

export default brain;
