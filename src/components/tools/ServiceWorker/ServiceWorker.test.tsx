import React from 'react';
import { render } from '@testing-library/react';

import ServiceWorker from './ServiceWorker';

describe('Service worker', () => {
  test(`Renders nothing because it's not production and 'serviceWorker' doesn't exist in navigator`, () => {
    const { container } = render(<ServiceWorker />);
    expect(container.firstChild).toBe(null);
  });
});
