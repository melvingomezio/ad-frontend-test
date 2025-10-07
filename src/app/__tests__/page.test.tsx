import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock the catalog hook
jest.mock('../journeys/catalog/screens/resources/hooks/useCatalog', () => ({
  useCatalog: () => ({
    catalog: null,
    loading: true,
    loadingMore: false,
    selectedGenre: '',
    handleGenreChange: jest.fn(),
    handleLoadMore: jest.fn(),
  }),
}));

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})