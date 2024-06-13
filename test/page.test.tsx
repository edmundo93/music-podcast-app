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
  it('should renders Content component', () => {
    render(<Home />)
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
