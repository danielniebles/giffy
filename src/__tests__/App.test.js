import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import App from '../App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
