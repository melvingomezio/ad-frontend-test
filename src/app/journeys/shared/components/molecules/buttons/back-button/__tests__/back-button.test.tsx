import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from '../BackButton';

describe('BackButton', () => {
  const defaultProps = {
    text: 'Back to Home',
  };

  it('renders text and icon', () => {
    render(<BackButton {...defaultProps} />);
    
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
    expect(screen.getByAltText('Back')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<BackButton {...defaultProps} onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders with custom icon alt text', () => {
    render(<BackButton {...defaultProps} iconAlt="Go back" />);
    
    expect(screen.getByAltText('Go back')).toBeInTheDocument();
  });
});