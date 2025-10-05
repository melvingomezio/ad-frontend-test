import { render, screen } from '@testing-library/react';
import { Image } from '../Image';

describe('Image', () => {
  it('renders with correct src and alt', () => {
    render(<Image src="/test-image.jpg" alt="Test Image" width={100} height={100} />);
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.jpg'));
  });

  it('applies object-fit style', () => {
    render(<Image src="/image.jpg" alt="Image" width={100} height={100} objectFit="contain" />);
    const image = screen.getByAltText('Image');
    expect(image).toHaveStyle({ objectFit: 'contain' });
  });

  it('uses default object-fit cover', () => {
    render(<Image src="/image.jpg" alt="Image" width={100} height={100} />);
    const image = screen.getByAltText('Image');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('renders with different object-fit values', () => {
    render(<Image src="/image.jpg" alt="Image" width={100} height={100} objectFit="fill" />);
    const image = screen.getByAltText('Image');
    expect(image).toHaveStyle({ objectFit: 'fill' });
  });

  it('renders without width and height', () => {
    render(<Image src="/image.jpg" alt="Image" />);
    const image = screen.getByAltText('Image');
    expect(image).toBeInTheDocument();
  });
});