// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getAllPodcast } from '@/api/services/podcastService'
import Content from '@/components/layout/content/content'
import { render, screen } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'
import { beforeEach } from 'node:test'

describe('Content', () => {
  beforeEach(() => {
    jest.doMock('@/api/services/podcastService', () => ({
      getAllPodcast: jest.fn().mockResolvedValue(mockPodcasts),
    }))
  })

  afterEach(() => {
    jest.resetModules()
  })

  test('should render Content component', async () => {
    render(<Content />)

    const content = screen.getByTestId('content')

    expect(content).toBeInTheDocument()
  })

  test('should render SearchSection', async () => {
    render(<Content />)

    expect(screen.getByTestId('search-section')).toBeInTheDocument()
  })
})
