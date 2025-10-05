import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button variant="btn-filled">Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies filled variant class', () => {
    render(<Button variant="btn-filled">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('btn-filled');
  });

  it('applies outlined variant class', () => {
    render(<Button variant="btn-outlined">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('btn-outlined');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button variant="btn-filled" onClick={handleClick}>Button</Button>);
    fireEvent.click(screen.getByText('Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    const handleClick = jest.fn();
    render(<Button variant="btn-filled" onClick={handleClick} disabled>Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies backgroundColor style when provided', () => {
    render(<Button variant="btn-filled" backgroundColor="primary500">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ backgroundColor: 'var(--color-primary-500)' });
  });

  it('applies borderColor style when provided', () => {
    render(<Button variant="btn-outlined" borderColor="primary800">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ borderColor: 'var(--color-primary-800)' });
  });

  it('applies color style when provided', () => {
    render(<Button variant="btn-filled" color="primary000">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ color: 'var(--color-primary-000)' });
  });

  it('renders without optional props', () => {
    render(<Button variant="btn-filled">Simple Button</Button>);
    expect(screen.getByText('Simple Button')).toBeInTheDocument();
  });
});