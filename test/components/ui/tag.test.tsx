import Tag from "@app-components/ui/tag"
import { render, screen } from "@testing-library/react"

describe('Tag', () => {
    it('Should render tag', () => {
        render(<Tag value={10} />)

        const tag = screen.getByTestId('tag')

        expect(tag).toBeInTheDocument()
    })

    it('Should show the value', () => {
        const value = 'Diez'
        
        render(<Tag value={value} />)

        const tag = screen.getByText(value)

        expect(tag).toBeInTheDocument()
    })

    it('Should render tag with primary class if mode is primary', () => {
        render(<Tag value={100} mode="primary" />)

        const tag = screen.getByTestId('tag')

        expect(tag).toBeInTheDocument()
        expect(tag).toHaveClass('primary')
    })

    it('Should render tag without primary class if no mode passed', () => {
        render(<Tag value={100} />)

        const tag = screen.getByTestId('tag')

        expect(tag).toBeInTheDocument()
        expect(tag).not.toHaveClass('primary')
    })
})