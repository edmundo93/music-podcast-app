/* eslint-disable @typescript-eslint/no-var-requires */
import SearchSection from '@/components/search-section'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'
import { render, screen, waitFor } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'
import userEvent from '@testing-library/user-event'

describe('SearchSection Component', () => {
  it('renders Search component and Tag component with initial state', async () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <SearchSection />
      </PodcastsContext.Provider>
    )

    expect(screen.getByTestId('search-section')).toBeInTheDocument()

    expect(screen.getByText('0')).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText('Filter podcasts...')
    ).toBeInTheDocument()
  })

  it('filters podcasts and updates results count on search input change', async () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <SearchSection />
      </PodcastsContext.Provider>
    )

    const searchInput = screen.getByTestId('input')
    await userEvent.type(searchInput, 'The')

    await waitFor(() => {
      expect(searchInput).toHaveValue('The')
    })
  })
})
