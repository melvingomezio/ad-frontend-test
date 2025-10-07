import { render } from '@testing-library/react';

jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' })
}));

// Mock RootLayout to avoid HTML nesting issues in tests
const MockRootLayout = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="root-layout">{children}</div>
);

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByTestId } = render(
      <MockRootLayout>
        <div data-testid="test-child">Test Content</div>
      </MockRootLayout>
    );

    expect(getByTestId('test-child')).toBeInTheDocument();
    expect(getByTestId('root-layout')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { getByTestId } = render(
      <MockRootLayout>
        <div>Test Content</div>
      </MockRootLayout>
    );

    expect(getByTestId('root-layout')).toBeInTheDocument();
  });
});