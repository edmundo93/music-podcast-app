import { useCallback, useEffect, useState } from 'react'
import { EpisodeI } from '@/api/data/Episode'
import { getPodcastEpisodes } from '@/api/services/podcastService'

interface UseEpisodI {
  loading: boolean
  results: number
  episodes: EpisodeI[]
  getEpisode: (episodeId: string) => EpisodeI | undefined
}

export const useEpisodes = (podcastId: string): UseEpisodI => {
  const [loading, setLoading] = useState<boolean>(false)
  const [episodes, setEpisodes] = useState<EpisodeI[]>([])
  const [results, setResults] = useState<number>(0)

  useEffect(() => {
    void getEpisodes()
  }, [])

  const getEpisodes = async () => {
    setLoading(true)
    const episodes = await getPodcastEpisodes(podcastId)
    setEpisodes(episodes?.results ?? [])
    setResults(episodes?.resultCount ?? 0)
    setLoading(false)
  }

  const getEpisode = useCallback(
    (episodeId: string): EpisodeI | undefined => {
      return !episodeId
        ? undefined
        : episodes.find((episode) => episode.trackId === parseInt(episodeId))
    },
    [episodes]
  )

  return {
    loading: loading,
    results: results,
    episodes: episodes,
    getEpisode: getEpisode,
  }
}
