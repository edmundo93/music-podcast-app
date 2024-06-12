import { PodcastListI } from '@/api/data/Podcast'
import { apiFetch } from '@/api/api'

const API_URL = process.env.API_URL
const REVALIDATE = process.env.REVALIDATE

export const getPodcastList = async (): Promise<PodcastListI> => {
  const revalidate: number = REVALIDATE ? parseInt(REVALIDATE) : 86400
  try {
    const response = await apiFetch(API_URL as string, {
      next: { revalidate: revalidate },
    })

    if (response.status === 200) {
      const respJSON = await response.json()
      return JSON.parse(respJSON.contents)
    }

    throw new Error(`${response.status} ${response.statusText}`)
  } catch (error: any) {
    throw error.message
  }
}
