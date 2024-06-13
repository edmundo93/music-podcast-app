import PodcastCard from '@/components/podcast-card/podcast-card'
import { render, screen } from '@testing-library/react'
import { mockPodcasts } from '@/test/__mocks__/podcastMocks'
import styles from '@app-components/podcast-card/podcast-card.module.css'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'

describe('PodcastCard', () => {
  test('renders podcast details correctly', async () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <PodcastCard podcast={mockPodcasts[0]} />
      </PodcastsContext.Provider>
    )

    const image = screen.getByAltText(mockPodcasts[0]['im:name'].label)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'height',
      mockPodcasts[0]['im:image'][1].attributes.height
    )
    expect(image).toHaveAttribute(
      'width',
      mockPodcasts[0]['im:image'][1].attributes.height
    )

    const title = screen.getByText(mockPodcasts[0].title.label)
    expect(title).toBeInTheDocument()
    expect(title.tagName).toBe('STRONG')

    const artist = screen.getByText(
      `Author: ${mockPodcasts[0]['im:artist'].label}`
    )
    expect(artist).toBeInTheDocument()
  })

  test('applies the correct styles', () => {
    render(
      <PodcastsContext.Provider
        value={{
          filteredPodcasts: mockPodcasts,
          podcasts: mockPodcasts,
          isLoading: false,
          dispatch: () => {},
        }}
      >
        <PodcastCard podcast={mockPodcasts[0]} />
      </PodcastsContext.Provider>
    )

    const card = screen.getByTestId('podcast-card')
    expect(card).toHaveClass(styles.card)

    const image = screen.getByAltText(mockPodcasts[0]['im:name'].label)
    expect(image).toHaveClass(styles.image)
  })
})
