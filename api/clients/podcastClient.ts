import { PodcastListI } from '@/api/data/Podcast'
import { apiFetch } from '@/api/api'
import { EpisodesI } from '../data/Episode'

const API_URL = process.env.API_URL
const EPISODES_URL = process.env.EPISODES_URL
const REVALIDATE = process.env.REVALIDATE

export const getPodcastList = async (): Promise<PodcastListI> => {
  return await request(API_URL as string)
}

export const getEpisodes = async (podcastId: string): Promise<EpisodesI> => {
  const url = `${EPISODES_URL}${podcastId}`
  return await request(url)
}

const request = async (url: string) => {
  const revalidate: number = REVALIDATE ? parseInt(REVALIDATE) : 86400
  try {
    const response = await apiFetch(url as string, {
      next: { revalidate: revalidate },
    })

    if (response.status === 200) {
      const jsonResp = await response.json()
      const cleanedJson = jsonResp.contents.replace(/\\n/g, '')
      return JSON.parse(cleanedJson)
    }

    throw new Error(`${response.status} ${response.statusText}`)
  } catch (error: any) {
    throw error.message
  }
}
