import { render, screen } from '@testing-library/react';
import { SummaryCard } from '../SummaryCard';

describe('SummaryCard', () => {
  const defaultProps = {
    title: 'Order Summary',
    items: [
      { title: 'Game 1', price: 59.99 },
      { title: 'Game 2', price: 39.99 },
      { title: 'Game 3', price: 29.99 },
    ],
  };

  it('renders title and items count', () => {
    render(<SummaryCard {...defaultProps} />);
    
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('3 items')).toBeInTheDocument();
  });

  it('renders all items with prices', () => {
    render(<SummaryCard {...defaultProps} />);
    
    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('$59.99')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();
    expect(screen.getByText('$39.99')).toBeInTheDocument();
    expect(screen.getByText('Game 3')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  it('calculates and displays correct order total', () => {
    render(<SummaryCard {...defaultProps} />);
    
    expect(screen.getByText('Order Total')).toBeInTheDocument();
    expect(screen.getByText('$129.97')).toBeInTheDocument();
  });

  it('handles empty items list', () => {
    render(<SummaryCard {...defaultProps} items={[]} />);
    
    expect(screen.getByText('0 items')).toBeInTheDocument();
    expect(screen.getByText('Order Total')).toBeInTheDocument();
    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });
});