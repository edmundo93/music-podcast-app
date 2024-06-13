// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getAllPodcast } from '@/api/services/podcastService'
import Content from '@/components/layout/content/content'
import { render, screen } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'
import { beforeEach } from 'node:test'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'

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
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <Content />
      </PodcastsContext.Provider>
    )

    const content = screen.getByTestId('content')

    expect(content).toBeInTheDocument()
  })

  test('should render SearchSection', async () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <Content />
      </PodcastsContext.Provider>
    )

    expect(screen.getByTestId('search-section')).toBeInTheDocument()
  })
})
