import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ScrollToTop from './ScrollToTop';

describe('Scroll to top', () => {
  global.scrollTo = jest.fn();

  test('It works', () => {
    const history = createMemoryHistory();
    expect(global.scrollTo).not.toHaveBeenCalled();
    render(
      <Router history={history}>
        <ScrollToTop />
      </Router>
    );
    history.push('/1337');
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
