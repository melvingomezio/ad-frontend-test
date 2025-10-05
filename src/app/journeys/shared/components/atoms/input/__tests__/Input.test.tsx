import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('applies input class', () => {
    render(<Input placeholder="Input" />);
    const input = screen.getByPlaceholderText('Input');
    expect(input).toHaveClass('input');
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders with different input types', () => {
    render(<Input type="email" placeholder="Email" />);
    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with password type', () => {
    render(<Input type="password" placeholder="Password" />);
    const input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders with number type', () => {
    render(<Input type="number" placeholder="Number" />);
    const input = screen.getByPlaceholderText('Number');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('uses default text type', () => {
    render(<Input placeholder="Default" />);
    const input = screen.getByPlaceholderText('Default');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('renders with value', () => {
    render(<Input value="test value" onChange={() => {}} />);
    const input = screen.getByDisplayValue('test value');
    expect(input).toBeInTheDocument();
  });

  it('applies backgroundColor style when provided', () => {
    render(<Input backgroundColor="primary100" placeholder="Input" />);
    const input = screen.getByPlaceholderText('Input');
    expect(input).toHaveStyle({ backgroundColor: 'var(--color-primary-100)' });
  });

  it('applies borderColor style when provided', () => {
    render(<Input borderColor="primary300" placeholder="Input" />);
    const input = screen.getByPlaceholderText('Input');
    expect(input).toHaveStyle({ borderColor: 'var(--color-primary-300)' });
  });

  it('applies color style when provided', () => {
    render(<Input color="primary800" placeholder="Input" />);
    const input = screen.getByPlaceholderText('Input');
    expect(input).toHaveStyle({ color: 'var(--color-primary-800)' });
  });

  it('renders without optional props', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});