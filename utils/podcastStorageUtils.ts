import { PodcastItemI } from '@/api/data/Podcast'
import { getItem, removeItem, setItem } from '@/utils/localStorageUtils'

const KEY_PREFIX = 'podcast-app-'

const podcastListKey = KEY_PREFIX + 'podcasts'
const lastFetchTimeKey = KEY_PREFIX + 'lastFetchTime'

export const getStoredPodcastList = (): PodcastItemI[] | null => {
  return getItem(podcastListKey)
}

export const getStoredLastFetchTime = (): number | null => {
  return getItem(lastFetchTimeKey)
}

export const storePodcastList = (value: PodcastItemI[]) => {
  setItem(podcastListKey, value)
}

export const storeLastFetchTime = () => {
  setItem(lastFetchTimeKey, Date.now())
}

export const removePodcastStorage = () => {
  removeItem(podcastListKey)
  removeItem(lastFetchTimeKey)
}
