import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies button class', () => {
    render(<Button>Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('button');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    fireEvent.click(screen.getByText('Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies backgroundColor style when provided', () => {
    render(<Button backgroundColor="primary500">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ backgroundColor: 'var(--color-primary-500)' });
  });

  it('applies borderColor style when provided', () => {
    render(<Button borderColor="primary800">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ borderColor: 'var(--color-primary-800)' });
  });

  it('applies color style when provided', () => {
    render(<Button color="primary000">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveStyle({ color: 'var(--color-primary-000)' });
  });
});