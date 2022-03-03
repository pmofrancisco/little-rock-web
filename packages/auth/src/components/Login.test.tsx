import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders login page', () => {
  const { getByText } = render(<Login />);
  const h1 = getByText(/login page/i);
  expect(h1).toBeInTheDocument();
});
