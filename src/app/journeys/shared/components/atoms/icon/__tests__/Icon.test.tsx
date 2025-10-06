import { render, screen } from '@testing-library/react';
import { Icon } from '../Icon';

describe('Icon', () => {
  it('renders with correct alt text', () => {
    render(<Icon src="/test-icon.svg" alt="Test Icon" />);
    const icon = screen.getByAltText('Test Icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies Tailwind classes', () => {
    render(<Icon src="/icon.svg" alt="Icon" />);
    const icon = screen.getByAltText('Icon');
    expect(icon).toHaveClass('w-6', 'h-6');
  });

  it('renders with different alt values', () => {
    render(<Icon src="/another-icon.png" alt="Another Icon" />);
    const icon = screen.getByAltText('Another Icon');
    expect(icon).toBeInTheDocument();
  });

  it('has correct dimensions', () => {
    render(<Icon src="/icon.svg" alt="Icon" />);
    const icon = screen.getByAltText('Icon');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });
});