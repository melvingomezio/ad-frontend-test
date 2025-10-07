import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Alert } from '../Alert';

describe('Alert', () => {
  it('renders when visible', () => {
    render(<Alert message="Item added to cart" isVisible={true} />);
    
    expect(screen.getByText('Item added to cart')).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    render(<Alert message="Item added to cart" isVisible={false} />);
    
    expect(screen.queryByText('Item added to cart')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<Alert message="Item added to cart" isVisible={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByAltText('Close');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('auto-closes after 3 seconds', async () => {
    const mockOnClose = jest.fn();
    render(<Alert message="Item added to cart" isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => expect(mockOnClose).toHaveBeenCalled(), { timeout: 3100 });
  });
});