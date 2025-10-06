import { render, screen, fireEvent } from '@testing-library/react';
import { TextButton } from '../TextButton';

describe('TextButton', () => {
  it('renders with filled variant', () => {
    const { container } = render(
      <TextButton variant="btn-filled" text="Click me" />
    );
    
    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(container.querySelector('.btn-filled')).toBeInTheDocument();
  });

  it('renders with outlined variant', () => {
    const { container } = render(
      <TextButton variant="btn-outlined" text="Click me" />
    );
    
    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(container.querySelector('.btn-outlined')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <TextButton variant="btn-filled" text="Click me" onClick={mockOnClick} />
    );
    
    fireEvent.click(screen.getByText('Click me'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <TextButton variant="btn-filled" text="Click me" disabled />
    );
    
    expect(screen.getByRole('button')).toBeDisabled();
  });
});