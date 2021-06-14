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