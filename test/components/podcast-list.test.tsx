import PodcastList from '@/components/podcast-list/podcast-list'
import { render, screen } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'
import styles from '@app-components/podcast-list/podcast-list.module.css'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'

describe('PodcastList', () => {
  test('renders a list of podcasts correctly', () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <PodcastList />
      </PodcastsContext.Provider>
    )

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toBeInTheDocument()
    expect(podcastList.children.length).toBe(2)
  })

  test('applies the correct styles to the container', () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <PodcastList />
      </PodcastsContext.Provider>
    )

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toHaveClass('row')
    expect(podcastList).toHaveClass(styles.container)
  })

  test('renders empty state correctly', () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: [],
          podcasts: [],
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <PodcastList />
      </PodcastsContext.Provider>
    )

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toBeInTheDocument()
    expect(podcastList.children.length).toBe(0)
  })
})
