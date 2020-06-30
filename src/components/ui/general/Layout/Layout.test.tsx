import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Layout from './Layout';

describe('Layout', () => {
  test('Renders "1337" as children', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Layout>1337</Layout>
      </Router>
    );
    expect(getByText('1337')).toBeInTheDocument();
  });
});
