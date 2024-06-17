/* eslint-disable react/display-name */
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import EpisodeDetail from '@app-components/episodes/episode/episode-detail'
import * as useEpisodesHook from '@/hooks/useEpisodes'
import { episodesMock } from '../__mocks__/episodeMocks'

// Mock the useEpisodes hook
jest.mock('@/hooks/useEpisodes')
jest.mock('@/components/spinner-loader/spinner-loader', () => () => (
  <div data-testid="spinner-loader">Loading...</div>
))
jest.mock('@/components/ui/audio-player/audio-player', () => ({ src }: any) => (
  <div data-testid="audio-player">{`Audio Player: ${src}`}</div>
))

describe('EpisodeDetail Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the spinner loader initially', () => {
    jest.spyOn(useEpisodesHook, 'useEpisodes').mockReturnValue({
      loading: false,
      results: 20,
      episodes: episodesMock,
      getEpisode: jest.fn().mockReturnValue(undefined),
    })

    render(<EpisodeDetail id="1" episodeId="2" />)

    expect(screen.getByTestId('spinner-loader')).toBeInTheDocument()
  })

  it('renders episode details correctly', async () => {
    jest.spyOn(useEpisodesHook, 'useEpisodes').mockReturnValue({
      loading: false,
      results: 20,
      episodes: episodesMock,
      getEpisode: jest.fn().mockReturnValue(episodesMock[0]),
    })

    render(<EpisodeDetail id="1" episodeId="2" />)

    await waitFor(() => {
      expect(screen.getByTestId('episode-detail')).toBeInTheDocument()
    })

    expect(screen.getByText(episodesMock[0].trackName)).toBeInTheDocument()
  })
})
