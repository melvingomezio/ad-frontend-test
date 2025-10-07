import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  const defaultProps = {
    text: 'GamerShop',
    iconSrc: '/icons/user.svg',
  };

  it('renders text and icon', () => {
    render(<Navbar {...defaultProps} />);
    
    expect(screen.getByText('GamerShop')).toBeInTheDocument();
    expect(screen.getByAltText('Icon')).toBeInTheDocument();
  });

  it('calls onTextClick when text is clicked', () => {
    const mockOnTextClick = jest.fn();
    render(<Navbar {...defaultProps} onTextClick={mockOnTextClick} />);
    
    fireEvent.click(screen.getByText('GamerShop'));
    expect(mockOnTextClick).toHaveBeenCalled();
  });

  it('calls onIconClick when icon is clicked', () => {
    const mockOnIconClick = jest.fn();
    render(<Navbar {...defaultProps} onIconClick={mockOnIconClick} />);
    
    fireEvent.click(screen.getByAltText('Icon'));
    expect(mockOnIconClick).toHaveBeenCalled();
  });

  it('renders with custom alt text', () => {
    render(<Navbar {...defaultProps} iconAlt="User profile" />);
    
    expect(screen.getByAltText('User profile')).toBeInTheDocument();
  });
});