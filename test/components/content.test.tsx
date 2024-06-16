// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as useGetPodcastHook from '@/hooks/useGetPodcast'
import Content from '@/components/layout/content/content'
import { render, screen, waitFor } from '@testing-library/react'
import { mockPodcasts } from '../__mocks__/podcastMocks'

jest.mock('@/hooks/useGetPodcast')

describe('Content', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('show the loading skeletron when podcast list is loading', async () => {
    jest.spyOn(useGetPodcastHook, 'useGetPodcast').mockReturnValue({
      isLoading: true,
      podcasts: [],
    })

    render(<Content />)

    await waitFor(() => {
      expect(screen.getByTestId('content')).toBeInTheDocument()
    })

    expect(screen.getByTestId('podcast-list-skeleton')).toBeInTheDocument()
  })

  it('show the list of podcast when the loading is over', async () => {
    jest.spyOn(useGetPodcastHook, 'useGetPodcast').mockReturnValue({
      isLoading: false,
      podcasts: mockPodcasts,
    })

    render(<Content />)

    await waitFor(() => {
      expect(screen.getByTestId('content')).toBeInTheDocument()
      expect(screen.getByTestId('podcast-list')).toBeInTheDocument()
    })
  })
})
