import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from './Header';

describe('Header', () => {
  test('Renders and contains string "Grid"', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(getByText('Grid')).toBeInTheDocument();
  });
});
