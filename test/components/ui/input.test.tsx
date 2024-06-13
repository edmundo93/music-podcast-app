import Input from '@app-components/ui/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('Should render Input component', () => {
    render(<Input />)

    const input = screen.getByTestId('input')

    expect(input).toBeInTheDocument()
  })

  it('Should render correctly the input type', () => {
    render(<Input type="number" />)

    const input = screen.getByTestId('input')

    expect(input).toHaveAttribute('type', 'number')
  })

  it('Should show a place holder if it is passed', () => {
    const placeholder = 'A placeholder...'

    render(<Input placeholder={placeholder} />)

    const input = screen.getByTestId('input')
    const inputPlaceHolder = screen.getByPlaceholderText(placeholder)

    expect(input).toBeInTheDocument()
    expect(inputPlaceHolder).toBeInTheDocument()
  })

  it('Should changes value correctly', async () => {
    const value = 'New value'

    render(<Input />)

    const input = screen.getByTestId('input')
    await userEvent.type(input, value)

    expect(input).toHaveValue(value)
  })
})
