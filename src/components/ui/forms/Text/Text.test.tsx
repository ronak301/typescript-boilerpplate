import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  test('Change value to "123"', () => {
    const { getByLabelText } = render(<Text />);
    const inputText = getByLabelText('text') as HTMLInputElement;
    fireEvent.change(inputText, { target: { value: '123' } });
    expect(inputText.value).toBe('123');
  });
});
