import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
  const mockNavbar = <nav>Test Navbar</nav>;
  const mockContent = <div>Test Content</div>;
  const mockFooter = <div>Test Footer</div>;

  it('renders navbar, content, and footer', () => {
    render(
      <Layout navbar={mockNavbar} footer={mockFooter}>
        {mockContent}
      </Layout>
    );
    
    expect(screen.getByText('Test Navbar')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('applies correct layout classes', () => {
    const { container } = render(
      <Layout navbar={mockNavbar} footer={mockFooter}>
        {mockContent}
      </Layout>
    );
    
    const layoutDiv = container.firstChild;
    expect(layoutDiv).toHaveClass('min-h-screen', 'flex', 'flex-col');
  });

  it('renders header, main, and footer elements', () => {
    render(
      <Layout navbar={mockNavbar} footer={mockFooter}>
        {mockContent}
      </Layout>
    );
    
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
  });
});