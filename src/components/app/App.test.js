import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders NDNU Connect header', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/NDNU Connect/i);
  expect(h1Element).toBeInTheDocument();
});
