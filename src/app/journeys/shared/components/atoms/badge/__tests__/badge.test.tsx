import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies badge class', () => {
    render(<Badge>Badge</Badge>);
    const badge = screen.getByText('Badge');
    expect(badge).toHaveClass('badge');
  });

  it('applies backgroundColor style when provided', () => {
    render(<Badge backgroundColor="primary500">Badge</Badge>);
    const badge = screen.getByText('Badge');
    expect(badge).toHaveStyle({ backgroundColor: 'var(--color-primary-500)' });
  });

  it('applies borderColor style when provided', () => {
    render(<Badge borderColor="primary800">Badge</Badge>);
    const badge = screen.getByText('Badge');
    expect(badge).toHaveStyle({ borderColor: 'var(--color-primary-800)' });
  });

  it('renders without optional props', () => {
    render(<Badge>Simple Badge</Badge>);
    expect(screen.getByText('Simple Badge')).toBeInTheDocument();
  });
});