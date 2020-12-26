import Mission from './Mission';
import { render, screen } from '@testing-library/react';

test('Project Setup Works', () => {
  render(<Mission />);
  const linkElement = screen.getByText(/Mission/i);
  expect(linkElement).toBeInTheDocument();
});
