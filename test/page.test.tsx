import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { mockPodcasts } from './__mocks__/podcastMocks'

beforeEach(() => {
  jest.doMock('@/api/services/podcastService', () => ({
    getAllPodcast: jest.fn().mockResolvedValue(mockPodcasts),
  }))
})

afterEach(() => {
  jest.resetModules()
})

describe('Home', () => {
  it('should render a main', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })

  it('should renders NavBar and Content components', () => {
    render(<Home />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
