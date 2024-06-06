import Search from "@app-components/search/search"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Search', () => {
    it('Should render search component', () => {
        const value = ''
        const setValue = jest.fn()
        const placeHolder = 'Place holder text'

        render(<Search value={value} setValue={setValue} placeholder={placeHolder} />)

        const search = screen.getByTestId('search')

        expect(search).toBeInTheDocument()
    })

    it('Should render input with correct value', () => {
        const value = 'test'
        const setValue = jest.fn()

        render(<Search value={value} setValue={setValue} />)
        const searchInput = screen.getByRole('textbox')

        expect(searchInput).toBeInTheDocument()
        expect(searchInput).toHaveValue(value)
    })

    it('Should call setValue on input change', async () => {
        let value = 'test'
        const newValue = 'new value'
        const setValue = jest.fn( (newValue: string) => { value = newValue})

        render(<Search value={value} setValue={setValue} />)
        const searchInput = screen.getByRole('textbox')

        await fireEvent.change(searchInput, { target: { value: newValue } })

        expect(searchInput).toBeInTheDocument()
        expect(setValue).toHaveBeenCalled()
        expect(setValue).toHaveBeenCalledWith(newValue)
        expect(value).toEqual(newValue)
    })
})