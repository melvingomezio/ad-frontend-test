import { render, screen } from '@testing-library/react';
import { Heading } from '../Heading';

describe('Heading', () => {
  it('renders children correctly', () => {
    render(<Heading variant="h1">Test Heading</Heading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders h1 element', () => {
    render(<Heading variant="h1">Heading 1</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders h2 element', () => {
    render(<Heading variant="h2">Heading 2</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('applies fontWeight style when provided', () => {
    render(<Heading variant="h1" fontWeight="semibold">Heading</Heading>);
    const heading = screen.getByText('Heading');
    expect(heading).toHaveStyle({ fontWeight: '600' });
  });

  it('applies color style when provided', () => {
    render(<Heading variant="h1" color="primary1000">Heading</Heading>);
    const heading = screen.getByText('Heading');
    expect(heading).toHaveStyle({ color: 'var(--color-primary-1000)' });
  });

  it('renders without optional props', () => {
    render(<Heading variant="h1">Simple Heading</Heading>);
    expect(screen.getByText('Simple Heading')).toBeInTheDocument();
  });
});