import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import DetailItemPage from './DetailItemPage';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('DetailItemPage renders without crashing', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<DetailItemPage />, container);
  });
});
