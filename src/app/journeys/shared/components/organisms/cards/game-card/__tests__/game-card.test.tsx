import { render, screen, fireEvent } from '@testing-library/react';
import { GameCard } from '../GameCard';

describe('GameCard', () => {
  const defaultProps = {
    imageSrc: '/games/game1.jpg',
    imageAlt: 'Game cover',
    genre: 'Action',
    title: 'Super Game',
    price: '$59.99',
    buttonText: 'Add to Cart',
  };

  it('renders all game information', () => {
    render(<GameCard {...defaultProps} />);
    
    expect(screen.getByAltText('Game cover')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Super Game')).toBeInTheDocument();
    expect(screen.getByText('$59.99')).toBeInTheDocument();
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });

  it('calls onButtonClick when button is clicked', () => {
    const mockOnButtonClick = jest.fn();
    render(<GameCard {...defaultProps} onButtonClick={mockOnButtonClick} />);
    
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(mockOnButtonClick).toHaveBeenCalled();
  });

  it('renders game card with proper structure', () => {
    const { container } = render(<GameCard {...defaultProps} />);
    
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Super Game')).toBeInTheDocument();
  });

  it('shows New badge when isNew is true', () => {
    render(<GameCard {...defaultProps} isNew={true} />);
    
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('does not show New badge when isNew is false', () => {
    render(<GameCard {...defaultProps} isNew={false} />);
    
    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });
});