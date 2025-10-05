import { render, screen } from '@testing-library/react';
import { Body } from '../Body';

describe('Body', () => {
  it('renders children correctly', () => {
    render(<Body variant="text-b1">Test Body</Body>);
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  it('applies variant class B1', () => {
    render(<Body variant="text-b1">Body Text</Body>);
    const body = screen.getByText('Body Text');
    expect(body).toHaveClass('text-b1');
  });

  it('applies variant class B2', () => {
    render(<Body variant="text-b2">Body Text</Body>);
    const body = screen.getByText('Body Text');
    expect(body).toHaveClass('text-b2');
  });

  it('applies variant class B3', () => {
    render(<Body variant="text-b3">Body Text</Body>);
    const body = screen.getByText('Body Text');
    expect(body).toHaveClass('text-b3');
  });

  it('applies fontWeight style when provided', () => {
    render(<Body variant="text-b1" fontWeight="bold">Body</Body>);
    const body = screen.getByText('Body');
    expect(body).toHaveStyle({ fontWeight: '700' });
  });

  it('applies color style when provided', () => {
    render(<Body variant="text-b1" color="primary800">Body</Body>);
    const body = screen.getByText('Body');
    expect(body).toHaveStyle({ color: 'var(--color-primary-800)' });
  });

  it('renders without optional props', () => {
    render(<Body variant="text-b1">Simple Body</Body>);
    expect(screen.getByText('Simple Body')).toBeInTheDocument();
  });
});