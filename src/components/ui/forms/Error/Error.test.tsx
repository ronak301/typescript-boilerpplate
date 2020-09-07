import React from 'react';
import { render } from '@testing-library/react';

import Error from './Error';

describe('Error', () => {
  test('Renders error message', () => {
    const errorMessage = 'Error!?';
    const { getByText } = render(<Error error={{}} message={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
