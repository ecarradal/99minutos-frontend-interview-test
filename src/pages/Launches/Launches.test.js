import { render, screen } from '@testing-library/react';
import Launches from './Launches';

test('Project Setup Works', () => {
  render(<Launches />);
  const linkElement = screen.getByText(/Launches/i);
  expect(linkElement).toBeInTheDocument();
});
