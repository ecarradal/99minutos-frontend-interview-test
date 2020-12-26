import Launches from './Launches';
import { render, screen } from '@testing-library/react';

test('Project Setup Works', () => {
  render(<Launches />);
  const linkElement = screen.getByText(/Launches/i);
  expect(linkElement).toBeInTheDocument();
});
