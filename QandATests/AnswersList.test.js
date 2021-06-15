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
  expect(tree).toMatchSnapshot();
});
// see more to load more

// does not show see more if there are none