import { PodcastItemI } from '@/api/data/Podcast'
import { KEY_PREFIX, getItem, setItem } from '@/utils/localStorageUtils'

const podcastListKey = KEY_PREFIX + 'podcasts'
const lastFetchTimeKey = KEY_PREFIX + 'lastFetchTime'

export const getStoredPodcastList = (): PodcastItemI[] | null => {
  return getItem(podcastListKey)
}

export const getStoredLastFetchTime = (): number | null => {
  return getItem(lastFetchTimeKey)
}

export const storePodcastList = (value: PodcastItemI[]) => {
  setItem('podcast', value)
}

export const storeLastFetchTime = () => {
  setItem('lastFetchTime', Date.now())
}
