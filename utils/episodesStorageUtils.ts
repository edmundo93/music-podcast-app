import { EpisodesI } from '@/api/data/Episode'
import { KEY_PREFIX, getItem, setItem } from './sessionStorageUtils'

export const storeEpisodesInfo = (
  podcastId: string,
  episodesInfo: EpisodesI | null
) => {
  const key = `${KEY_PREFIX}${podcastId}`
  setItem(key, episodesInfo)
}

export const storeEpisodeFetchTime = (podcastId: string) => {
  const key = `${KEY_PREFIX}${podcastId}-lastFetchTime`
  setItem(key, Date.now())
}

export const getStoredEpisodes = (podcastId: string): EpisodesI | null => {
  const key = `${KEY_PREFIX}${podcastId}`
  return getItem(key)
}

export const getStoredEpisodeFetchTime = (podcastId: string): number | null => {
  const key = `${KEY_PREFIX}${podcastId}-lastFetchTime`
  return getItem(key)
}
