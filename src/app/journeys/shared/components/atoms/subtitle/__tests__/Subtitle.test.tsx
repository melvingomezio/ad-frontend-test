import { render, screen } from '@testing-library/react';
import { Subtitle } from '../Subtitle';

describe('Subtitle', () => {
  it('renders children correctly', () => {
    render(<Subtitle variant="text-s1">Test Subtitle</Subtitle>);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('applies variant class S1', () => {
    render(<Subtitle variant="text-s1">Subtitle Text</Subtitle>);
    const subtitle = screen.getByText('Subtitle Text');
    expect(subtitle).toHaveClass('text-s1');
  });

  it('applies variant class S2', () => {
    render(<Subtitle variant="text-s2">Subtitle Text</Subtitle>);
    const subtitle = screen.getByText('Subtitle Text');
    expect(subtitle).toHaveClass('text-s2');
  });

  it('applies variant class S3', () => {
    render(<Subtitle variant="text-s3">Subtitle Text</Subtitle>);
    const subtitle = screen.getByText('Subtitle Text');
    expect(subtitle).toHaveClass('text-s3');
  });

  it('applies fontWeight style when provided', () => {
    render(<Subtitle variant="text-s1" fontWeight="medium">Subtitle</Subtitle>);
    const subtitle = screen.getByText('Subtitle');
    expect(subtitle).toHaveStyle({ fontWeight: '500' });
  });

  it('applies color style when provided', () => {
    render(<Subtitle variant="text-s1" color="primary600">Subtitle</Subtitle>);
    const subtitle = screen.getByText('Subtitle');
    expect(subtitle).toHaveStyle({ color: 'var(--color-primary-600)' });
  });

  it('renders without optional props', () => {
    render(<Subtitle variant="text-s1">Simple Subtitle</Subtitle>);
    expect(screen.getByText('Simple Subtitle')).toBeInTheDocument();
  });
});