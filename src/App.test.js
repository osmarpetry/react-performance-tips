import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the todo heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /todo coinbase/i })
  ).toBeInTheDocument();
});

test('adds a task to the list when the form is submitted', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox'), 'Feed the bird');
  userEvent.click(screen.getByRole('button', { name: /add$/i }));

  expect(screen.getByText('Item 0')).toBeInTheDocument();
});
