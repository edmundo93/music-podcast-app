import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from '@/components/layout/nav-bar/nav-bar'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'
import { mockPodcasts } from '../__mocks__/podcastMocks'

describe('NavBar', () => {
  it('should render header', () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <NavBar />
      </PodcastsContext.Provider>
    )

    const text = screen.getByText('Podcaster')
    const header = screen.getByTestId('navbar')

    expect(text).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  })
})
