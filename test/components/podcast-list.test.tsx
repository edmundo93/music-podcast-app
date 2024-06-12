import PodcastList from '@/components/podcast-list/podcast-list'
import { render, screen } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'
import styles from '@app-components/podcast-list/podcast-list.module.css'

describe('PodcastList', () => {
  test('renders a list of podcasts correctly', () => {
    render(<PodcastList podcasts={mockPodcasts} />)

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toBeInTheDocument()
    expect(podcastList.children.length).toBe(2)
  })

  test('applies the correct styles to the container', () => {
    render(<PodcastList podcasts={mockPodcasts} />)

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toHaveClass('row')
    expect(podcastList).toHaveClass(styles.container)
  })

  test('renders empty state correctly', () => {
    render(<PodcastList podcasts={[]} />)

    const podcastList = screen.getByTestId('podcast-list')
    expect(podcastList).toBeInTheDocument()
    expect(podcastList.children.length).toBe(0)
  })
})
