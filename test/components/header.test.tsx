import { render, screen } from "@testing-library/react";
import Header from '@app-components/header/header'

describe('Header', () => {
    it('should render header', () => {
        render(<Header />)
        
        const text = screen.getByText('Podcaster')
        const header = screen.getByTestId('header')

        expect(text).toBeInTheDocument();
        expect(header).toBeInTheDocument();
    })
})