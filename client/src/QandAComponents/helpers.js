
let Helpers = {};

Helpers.findTermInQuestion = (question, term) => {
  // takes question object
  //let found = false;
  if (question.question_body.includes(term)) {
    return true;
  }
  let answers = question.answers;
  for (var k in answers) {
    if (answers[k].body.includes(term)) {
      return true;
    }
  }
  return false;
};

export default Helpers;