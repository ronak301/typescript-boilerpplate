import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Link from './Link';

describe('Link', () => {
  test('Renders', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Link to="/1337">1337</Link>
      </Router>
    );
    expect(container).toBeInTheDocument();
  });

  test('Navigates to "/1337"', () => {
    const to = '1337';
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Link to={`/${to}`}>1337</Link>
      </Router>
    );
    fireEvent.click(getByText('1337'));
    expect(history.location.pathname).toBe(`/${to}`);
  });

  test('Link is given active class name', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Link to="/1337" activeClassName="is-active">
          1337
        </Link>
      </Router>
    );
    fireEvent.click(getByText('1337'));
    expect(getByText('1337')).toHaveClass('is-active');
  });

  test('Support external links', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Link to="https://www.modohockey.se/">Modo Hockey</Link>
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
