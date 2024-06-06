import Content from "@app-components/content/content"
import { render, screen } from "@testing-library/react"

describe('Content', () => {
    it('should render Content component', () => {
        render(<Content />)

        const content = screen.getByTestId('content')

        expect(content).toBeInTheDocument()
    })
})