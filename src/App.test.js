import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the todo heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /todo coinbase/i })
  ).toBeInTheDocument();
});

test('adds a task to the list when the form is submitted', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByRole('textbox'), 'Feed the bird');
  await user.click(screen.getByRole('button', { name: /add$/i }));

  expect(screen.getByText('Item 0')).toBeInTheDocument();
});
