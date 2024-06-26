import {
  getStoredPodcastList,
  getStoredLastFetchTime,
  storePodcastList,
  storeLastFetchTime,
} from '@/utils/podcastStorageUtils'
import { getItem, setItem } from '@/utils/sessionStorageUtils'
import { PodcastItemI } from '@/api/data/Podcast'
import { mockPodcasts } from '../__mocks__/podcastMocks'

// Mock de funciones de sessionStorageUtils
jest.mock('@/utils/sessionStorageUtils', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}))

const podcastListKey = `podcast-app-podcasts`
const lastFetchTimeKey = `podcast-app-lastFetchTime`

describe('podcastStorage functions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('getStoredPodcastList should return the podcast list from localStorage', () => {
    const mockPodcastList: PodcastItemI[] = mockPodcasts
    const getItemM = getItem as jest.Mock
    getItemM.mockReturnValue(mockPodcastList)

    const result = getStoredPodcastList()

    expect(getItem).toHaveBeenCalledWith(podcastListKey)
    expect(result).toEqual(mockPodcastList)
  })

  test('getStoredPodcastList should return null if no podcast list in localStorage', () => {
    const getItemM = getItem as jest.Mock
    getItemM.mockReturnValue(null)

    const result = getStoredPodcastList()

    expect(getItem).toHaveBeenCalledWith(podcastListKey)
    expect(result).toBeNull()
  })

  test('getStoredLastFetchTime should return the last fetch time from localStorage', () => {
    const mockLastFetchTime = Date.now()
    const getItemM = getItem as jest.Mock
    getItemM.mockReturnValue(mockLastFetchTime)

    const result = getStoredLastFetchTime()

    expect(getItem).toHaveBeenCalledWith(lastFetchTimeKey)
    expect(result).toBe(mockLastFetchTime)
  })

  test('getStoredLastFetchTime should return null if no last fetch time in localStorage', () => {
    const getItemM = getItem as jest.Mock
    getItemM.mockReturnValue(null)

    const result = getStoredLastFetchTime()

    expect(getItem).toHaveBeenCalledWith(lastFetchTimeKey)
    expect(result).toBe(null)
  })

  test('storePodcastList should save the podcast list to localStorage', () => {
    storePodcastList(mockPodcasts)

    expect(setItem).toHaveBeenCalledWith(podcastListKey, mockPodcasts)
  })

  test('storeLastFetchTime should save the current timestamp to localStorage', () => {
    const now = Date.now()
    jest.spyOn(global.Date, 'now').mockReturnValue(now)

    storeLastFetchTime()

    expect(setItem).toHaveBeenCalledWith(lastFetchTimeKey, now)
  })
})
