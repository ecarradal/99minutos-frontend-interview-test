import { render, screen } from '@testing-library/react';
import Mission from './Mission';

test('Project Setup Works', () => {
  render(<Mission
     />);
  const linkElement = screen.getByText(/Mission/i);
  expect(linkElement).toBeInTheDocument();
});
