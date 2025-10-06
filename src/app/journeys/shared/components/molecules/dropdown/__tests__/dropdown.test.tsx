import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown', () => {
  it('renders with placeholder', () => {
    render(<Dropdown options={mockOptions} placeholder="Select option" />);
    expect(screen.getByPlaceholderText('Select option')).toBeInTheDocument();
  });

  it('shows options when clicked', () => {
    render(<Dropdown options={mockOptions} />);
    
    fireEvent.click(screen.getByRole('textbox'));
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects option and calls onChange', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={mockOnChange} />);
    
    fireEvent.click(screen.getByRole('textbox'));
    fireEvent.click(screen.getByText('Option 2'));
    
    expect(mockOnChange).toHaveBeenCalledWith('option2');
    expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} value="option1" onChange={mockOnChange} />);
    expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
  });

  it('does not open when disabled', () => {
    render(<Dropdown options={mockOptions} disabled />);
    
    fireEvent.click(screen.getByRole('textbox'));
    
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});