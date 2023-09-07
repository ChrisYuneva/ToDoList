import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App test', () => {
  it('Render app', () => {
    const screen = render(<App />);

    expect(screen.getByText('ToDoList')).toBeInTheDocument();
    expect(screen.getByLabelText('Enter a task')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Unfulfilled')).toBeInTheDocument();
    expect(screen.getByText('Fulfilled')).toBeInTheDocument();
  });
});
