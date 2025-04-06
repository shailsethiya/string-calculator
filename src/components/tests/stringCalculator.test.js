import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

test('calculates sum correctly', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText(/enter numbers/i);
  const button = screen.getByText(/calculate/i);

  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(screen.getByText(/result: 6/i)).toBeInTheDocument();
});

test('shows error for negative numbers', () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText(/enter numbers/i), {
    target: { value: "1,-2" }
  });
  fireEvent.click(screen.getByText(/calculate/i));
  expect(screen.getByText(/negative numbers not allowed -2/i)).toBeInTheDocument();
});