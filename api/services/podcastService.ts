import { PodcastItemI } from '@/api/data/Podcast'
import { getPodcastList } from '@/api/clients/podcastClient'
import {
  getStoredLastFetchTime,
  getStoredPodcastList,
  storeLastFetchTime,
  storePodcastList,
} from '@/utils/podcastStorageUtils'
import { transFormMsToHours } from '@/utils/timeUtils'

const REVALIDATE = process.env.REVALIDATE

export const getAllPodcast = async (): Promise<PodcastItemI[]> => {
  try {
    const storedPodcasts = getStoredPodcastList()
    const lastFetchTime = getStoredLastFetchTime()
    if (storedPodcasts && lastFetchTime) {
      const now = Date.now()
      const hoursSinceLastFetch = Math.floor(
        ((now - lastFetchTime) / 1000) * 60 * 60
      )
      const timeToRefetch = parseInt(REVALIDATE as string)
      if (hoursSinceLastFetch < transFormMsToHours(timeToRefetch)) {
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
