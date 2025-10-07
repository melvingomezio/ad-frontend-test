import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { Footer } from '../Footer';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Footer', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders footer with logo', () => {
    render(<Footer />);
    
    const logo = screen.getByAltText('Apply Digital');
    expect(logo).toBeInTheDocument();
  });

  it('navigates to home when logo is clicked', () => {
    render(<Footer />);
    
    const logoContainer = screen.getByAltText('Apply Digital').closest('div');
    fireEvent.click(logoContainer!);
    
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});