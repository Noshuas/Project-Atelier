/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Helpfulness from '../client/src/QandAComponents/Helpfulness.jsx';
import GenericModal from '../client/src/QandAComponents/GenericModal.jsx';
import ReactDOM from 'react-dom';
import Helpers from '../client/src/QandAComponents/helpers.js';
import AnswerList from '../client/src/QandAComponents/AnswerList.jsx';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Helpfulness helpfulness='7' QorA='questions' id='17076' />, div);
});

test('Helpfulness snapshot', () => {
  const component = renderer.create(
    <Helpfulness helpfulness='7' QorA='questions' id='17076' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Helpfulness takes the helpfulness prop and displays it correctly', () => {
  const component = renderer.create(
    <Helpfulness helpfulness='7' QorA='questions' id='17076' />
  );

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
