import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  test('Renders "1337" as children', () => {
    const { getByText } = render(<Container>1337</Container>);
    expect(getByText('1337')).toBeInTheDocument();
  });
});
