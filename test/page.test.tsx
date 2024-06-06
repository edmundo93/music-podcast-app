import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock the Header component
jest.mock('@app-components/header/header', () => {
    const MockedHeader: React.FC = () => <div>Mocked Header</div>;
    MockedHeader.displayName = 'Header';
    return MockedHeader;
  });
  
  // Mock the Content component
  jest.mock('@app-components/content/content', () => {
    const MockedContent: React.FC = () => <div>Mocked Content</div>;
    MockedContent.displayName = 'Content';
    return MockedContent;
  });

describe('Home', () => {
    it('should render a main', () => {
        render(<Home />)

        const main = screen.getByRole('main')

        expect(main).toBeInTheDocument()
    })

    it('should renders Header and Content components', () => {
        render(<Home />)
        expect(screen.getByText('Mocked Header')).toBeInTheDocument();
        expect(screen.getByText('Mocked Content')).toBeInTheDocument();
    })
})