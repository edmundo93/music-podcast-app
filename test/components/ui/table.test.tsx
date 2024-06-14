import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from '@/components/ui/table/table'

describe('Table component', () => {
  const headValues = ['Name', 'Age', 'Occupation']
  const bodyValues = [
    ['Alice', 30, 'Engineer'],
    ['Bob', 25, 'Designer'],
    ['Charlie', 35, 'Teacher'],
  ]

  test('renders table headers correctly', () => {
    render(<Table headValues={headValues} bodyValues={bodyValues} />)

    headValues.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument()
    })
  })

  test('renders table body correctly', () => {
    render(<Table headValues={headValues} bodyValues={bodyValues} />)

    bodyValues.forEach((row) => {
      row.forEach((cell) => {
        expect(screen.getByText(String(cell))).toBeInTheDocument()
      })
    })
  })

  test('applies CSS classes correctly', () => {
    render(<Table headValues={headValues} bodyValues={bodyValues} />)

    const tableContainer = screen.getByRole('table').closest('div')
    expect(tableContainer).toHaveClass('container')
    expect(screen.getByRole('table')).toHaveClass('table')
  })
})
