/* eslint-disable prettier/prettier */
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { getPodcastEpisodes } from '@/api/services/podcastService'
import { EpisodeI } from '@/api/data/Episode'
import EpisodesDetail from '@/components/episodes/episodes-detail'
import { episodesMock } from '../__mocks__/episodeMocks'

jest.mock('@/api/services/podcastService')

describe('EpisodesDetail component', () => {
  const mockEpisodes: EpisodeI[] = episodesMock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading spinner initially', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValueOnce({
      resultCount: mockEpisodes.length,
      results: mockEpisodes,
    })

    render(<EpisodesDetail podcastId="123" />)
    
    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()
  })

  it('renders episodes correctly after loading', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValueOnce({
      resultCount: mockEpisodes.length,
      results: mockEpisodes,
    })

    render(<EpisodesDetail podcastId="123" />)

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByTestId('episodes-detail')).toBeInTheDocument()
  })

  it('renders "No episodes found" message if episodes array is empty', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValueOnce({
      resultCount: 0,
      results: [],
    })

    render(<EpisodesDetail podcastId="123" />)

    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
    })
      expect(screen.getByTestId('episodes-detail')).toBeInTheDocument()
      expect(screen.getByText('No episodes found')).toBeInTheDocument()
  })

  it('handles API error gracefully', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValue(null)

    render(<EpisodesDetail podcastId="123" />)

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByText('Episodes: 0')).toBeInTheDocument()
    expect(screen.getByText('No episodes found')).toBeInTheDocument()
  })
})
