import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IP Address and Message', () => {
  // Render the component
  render(<App />);

  // Assert that the expected text is present in the component
  const ipAddressElement = screen.getByText(/IP Address:/i);
  expect(ipAddressElement).toBeInTheDocument();

  const messageElement = screen.getByText(/Message:/i);
  expect(messageElement).toBeInTheDocument();
});
