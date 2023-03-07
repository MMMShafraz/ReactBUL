import { render, screen } from '@testing-library/react';
import App2 from './App2';
import App from './App';

test('renders learn react link', () => {
  render(<App2 />);
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
