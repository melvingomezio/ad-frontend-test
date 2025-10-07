import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCard } from '../ItemCard';

describe('ItemCard', () => {
  const defaultProps = {
    imageSrc: '/games/item1.jpg',
    imageAlt: 'Item cover',
    genre: 'RPG',
    title: 'The Witcher 3',
    description: 'Epic fantasy adventure game with rich storytelling',
    price: '$39.99',
    closeIconSrc: '/icons/close.svg',
  };

  it('renders all item information', () => {
    render(<ItemCard {...defaultProps} />);
    
    expect(screen.getByAltText('Item cover')).toBeInTheDocument();
    expect(screen.getByText('RPG')).toBeInTheDocument();
    expect(screen.getByText('The Witcher 3')).toBeInTheDocument();
    expect(screen.getByText('Epic fantasy adventure game with rich storytelling')).toBeInTheDocument();
    expect(screen.getByText('$39.99')).toBeInTheDocument();
    expect(screen.getByAltText('Close')).toBeInTheDocument();
  });

  it('calls onCloseClick when close icon is clicked', () => {
    const mockOnCloseClick = jest.fn();
    render(<ItemCard {...defaultProps} onCloseClick={mockOnCloseClick} />);
    
    const closeButton = screen.getByAltText('Close');
    fireEvent.click(closeButton);
    expect(mockOnCloseClick).toHaveBeenCalled();
  });

  it('renders with custom close icon alt text', () => {
    render(<ItemCard {...defaultProps} closeIconAlt="Remove item" />);
    
    expect(screen.getByAltText('Remove item')).toBeInTheDocument();
  });

  it('renders item card with proper structure', () => {
    const { container } = render(<ItemCard {...defaultProps} />);
    
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(screen.getByText('RPG')).toBeInTheDocument();
    expect(screen.getByText('The Witcher 3')).toBeInTheDocument();
    expect(screen.getByAltText('Close')).toBeInTheDocument();
  });
});