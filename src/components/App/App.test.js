import { render, screen } from '@testing-library/react';
import App from './App';

test('Project Setup Works', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
