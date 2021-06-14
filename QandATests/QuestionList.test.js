/**
 * @jest-environment jsdom
*/
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import QuestionList from '../client/src/QandAComponents/QuestionList.jsx';
import ReactDOM from 'react-dom';
import Helpers from '../client/src/QandAComponents/helpers.js';
import { render, screen, cleanup } from '@testing-library/react';

//after
const testResults = [{
  'question_id': 1,
  'question_body': 'Test 1?',
  'question_date': '2018-10-18T00:00:00.000Z',
  'asker_name': 'williamsmith',
  'question_helpfulness': 10,
  'reported': false,
  'answers': {
    68: {
      'id': 68,
      'body': 'We are selling it here without any markup from the middleman!',
      'date': '2018-08-18T00:00:00.000Z',
      'answerer_name': 'Seller',
      'helpfulness': 4,
      'photos': []
      // ...
    }
  }
},
{
  'question_id': 2,
  'question_body': 'Test 2?',
  'question_date': '2018-10-18T00:00:00.000Z',
  'asker_name': 'williamsmith',
  'question_helpfulness': 10,
  'reported': false,
  'answers': {
    68: {
      'id': 68,
      'body': 'We are selling it here without any markup from the middleman!',
      'date': '2018-08-18T00:00:00.000Z',
      'answerer_name': 'Seller',
      'helpfulness': 4,
      'photos': []
      // ...
    }
  }
},
{
  'question_id': 3,
  'question_body': 'Should not display unless expanded',
  'question_date': '2018-10-18T00:00:00.000Z',
  'asker_name': 'williamsmith',
  'question_helpfulness': 10,
  'reported': false,
  'answers': {
    68: {
      'id': 68,
      'body': 'We are selling it here without any markup from the middleman!',
      'date': '2018-08-18T00:00:00.000Z',
      'answerer_name': 'Seller',
      'helpfulness': 4,
      'photos': []
      // ...
    }
  }
}];
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionList questions={testResults} expanded={false} productName='Test Product' />, div);
});

test('QuestionList snapshot 1', () => {
  const component = renderer.create(
    <QuestionList questions={[]} expanded={false} productName='Test Product' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('QuestionList snapshot 2', () => {
  const component = renderer.create(
    <QuestionList questions={testResults} expanded={false} productName='Test Product' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
