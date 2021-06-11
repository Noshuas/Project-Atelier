import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Helpfulness from './client/src/QandAComponents/Helpfulness.jsx';
import GenericModal from './client/src/QandAComponents/GenericModal.jsx';
import ReactDOM from 'react-dom';
import Helpers from './client/src/QandAComponents/helpers.js';
import AnswerList from './client/src/QandAComponents/AnswerList.jsx';
import { render, screen } from '@testing-library/react';
/**
 * @jest-environment jsdom
 */
 test('renders learn react link', () => {
  render(<Helpfulness helpfulness='7' QorA='questions' id='17076' />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// it('renders without crashing', () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Helpfulness helpfulness='7' QorA='questions' id='17076' />, div);
// });

test('Helpfulness takes the helpfulness prop and displays it correctly', () => {
  const component = renderer.create(
    <Helpfulness helpfulness='7' QorA='questions' id='17076' />
  );
  expect(tree).toMatchSnapshot();

  let tree = component.toJSON();
  let spanText = Helpers.testHelp(tree.children);
  expect(spanText).toBe(' Helpful? Yes (7)');

  const component2 = renderer.create(
    <Helpfulness helpfulness='0' QorA='questions' id='17076' />
  );
  tree = component2.toJSON();
  spanText = Helpers.testHelp(tree.children);
  expect(spanText).toBe(' Helpful? Yes (0)');

  const component3 = renderer.create(
    <Helpfulness helpfulness='####' QorA='questions' id='17076' />
  );
  tree = component3.toJSON();
  spanText = Helpers.testHelp(tree.children);
  expect(spanText).toBe(' Helpful? Yes (####)');
});

test('Generic Modal does not render when Open is false', () => {
  const testClose = () => {};
  let component = renderer.create(
    <GenericModal open={false} onClose={testClose} >
      <div>
        Hello
      </div>
    </GenericModal>
  );
  let tree = component.toJSON();
  expect(tree).toBe(null);

  // component = renderer.create(
  //   <GenericModal open={true} onClose={testClose} >
  //     Hello
  //   </GenericModal>
  // );
  // tree = component.toJSON();
  // expect(tree.children).toBe(['Hello']);
});

// Answers List Rendering
// what asnwers list nees
// answers, moreAnswer boolean, handleMoreAnswers func

// only loads two to start
test('Answer list loads two answers at the start', () => {
  let testData = [
    {
      'answer_id': 8,
      'body': 'What a great question!',
      'date': '2018-01-04T00:00:00.000Z',
      'answerer_name': 'metslover',
      'helpfulness': 8,
      'photos': [],
    },
    {
      'answer_id': 9,
      'body': 'What a great question!',
      'date': '2018-01-04T00:00:00.000Z',
      'answerer_name': 'metslover',
      'helpfulness': 8,
      'photos': [],
    },
    {
      'answer_id': 10,
      'body': 'What a great question!',
      'date': '2018-01-04T00:00:00.000Z',
      'answerer_name': 'metslover',
      'helpfulness': 8,
      'photos': [],
    }];
  const component = renderer.create(
    <AnswerList answers={testData} moreAnswers={false} handleMoreAnswers={() => {}} />
  );
  let tree = component.toJSON();
  console.log(tree);
});
// see more to load more

// does not show see more if there are none
