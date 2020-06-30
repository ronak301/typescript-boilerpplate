import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('Renders and contains string "Footer"', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Footer')).toBeInTheDocument();
  });
});
