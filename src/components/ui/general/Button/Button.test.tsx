import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('Can set button type', () => {
    const { getByText } = render(<Button type="reset">Text</Button>);
    expect(getByText('Text')).toHaveAttribute('type', 'reset');
  });

  test('Change element type', () => {
    const { getByText } = render(<Button as="div">Text</Button>);
    expect(getByText('Text').nodeName).toEqual('DIV');
  });

  test('Passed href prop makes it an anchor element', () => {
    const { getByText } = render(
      <Button href="https://www.modohockey.se/">Text</Button>
    );
    expect(getByText('Text').nodeName).toEqual('A');
  });

  test('Passed to prop makes it an anchor element', () => {
    const { getByText } = render(
      <Button to="https://www.modohockey.se/">Text</Button>
    );
    expect(getByText('Text').nodeName).toEqual('A');
  });

  test('Can be disabled', () => {
    const { getByText } = render(<Button disabled>Text</Button>);
    expect(getByText('Text')).toHaveAttribute('disabled');
  });

  test('Can set target', () => {
    const { getByText } = render(
      <Button href="https://www.modohockey.se/" target="_blank">
        Text
      </Button>
    );
    expect(getByText('Text')).toHaveAttribute('target', '_blank');
  });
});
