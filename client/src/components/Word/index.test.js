import React from 'react';
import { render } from '@testing-library/react';
import Word from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Word />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
