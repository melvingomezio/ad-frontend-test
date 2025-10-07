import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<Card className="custom-card">Card</Card>);
    const card = screen.getByText('Card');
    expect(card).toHaveClass('custom-card');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Card</Card>);
    fireEvent.click(screen.getByText('Card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies backgroundColor style when provided', () => {
    render(<Card backgroundColor="primary100">Card</Card>);
    const card = screen.getByText('Card');
    expect(card).toHaveStyle({ backgroundColor: 'var(--color-primary-100)' });
  });

  it('applies borderColor style when provided', () => {
    render(<Card borderColor="primary300">Card</Card>);
    const card = screen.getByText('Card');
    expect(card).toHaveStyle({ borderColor: 'var(--color-primary-300)' });
  });

  it('renders without optional props', () => {
    render(<Card>Simple Card</Card>);
    expect(screen.getByText('Simple Card')).toBeInTheDocument();
  });

  it('renders without onClick', () => {
    render(<Card>No Click Card</Card>);
    const card = screen.getByText('No Click Card');
    fireEvent.click(card);
    expect(card).toBeInTheDocument();
  });
});