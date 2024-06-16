import { PodcastItemI } from '@/api/data/Podcast'
import { getEpisodes, getPodcastList } from '@/api/clients/podcastClient'
import {
  getStoredLastFetchTime,
  getStoredPodcastList,
  storeLastFetchTime,
  storePodcastList,
} from '@/utils/podcastStorageUtils'
import { transformSecondToHours } from '@/utils/timeUtils'
import { EpisodesI } from '../data/Episode'
import {
  getStoredEpisodeFetchTime,
  getStoredEpisodes,
  storeEpisodeFetchTime,
  storeEpisodesInfo,
} from '@/utils/episodesStorageUtils'

const REVALIDATE = process.env.REVALIDATE

export const getAllPodcast = async (): Promise<PodcastItemI[]> => {
  try {
    const storedPodcasts = getStoredPodcastList()
    const lastFetchTime = getStoredLastFetchTime()
    if (storedPodcasts && lastFetchTime) {
      const now = Date.now()
      const hoursSinceLastFetch = Math.floor(
        (now - lastFetchTime) / (1000 * 60 * 60)
      )
      const timeToRefetch = parseInt(REVALIDATE as string)
      if (hoursSinceLastFetch < transformSecondToHours(timeToRefetch)) {
        return storedPodcasts
      }
    }
    const podcasts = await getPodcastList()
    // Only store the info we are interested in
    const list = podcasts?.feed?.entry ?? []
    storePodcastList(list)
    storeLastFetchTime()
    return list
  } catch (error: any) {
    // As we don´t need to handle errors we display them by console and return empty arr.
    storePodcastList([])
    storeLastFetchTime()
    console.error(error.message)
    return []
  }
}

export const getPodcastEpisodes = async (
  podcastId: string
): Promise<EpisodesI | null> => {
  try {
    const episodesInfo = getStoredEpisodes(podcastId)
    const lastFetchTime = getStoredEpisodeFetchTime(podcastId)
    if (episodesInfo && lastFetchTime) {
      const now = Date.now()
      const hoursSinceLastFetch = Math.floor(
        (now - lastFetchTime) / (1000 * 60 * 60)
      )
      const timeToRefetch = parseInt(REVALIDATE as string)
      if (hoursSinceLastFetch < transformSecondToHours(timeToRefetch)) {
        return episodesInfo
      }
    }
    const response = await getEpisodes(podcastId)
    storeEpisodesInfo(podcastId, response)
    storeEpisodeFetchTime(podcastId)
    return response
  } catch (error: any) {
    console.error(error)
    storeEpisodesInfo(podcastId, null)
    storeEpisodeFetchTime(podcastId)
    return null
  }
}
