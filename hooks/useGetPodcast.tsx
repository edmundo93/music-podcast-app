import { useContext, useEffect } from 'react'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'
import { PodcastContextI } from '@/contexts/podcast-context/types'
import {
  updateFilteredPodcasts,
  updateLoading,
  updatePodcasts,
} from '@/contexts/podcast-context/podcasts.actions'
import { getAllPodcast } from '@/api/services/podcastService'

export const useGetPodcast = () => {
  const { dispatch, isLoading, podcasts } =
    useContext<PodcastContextI>(PodcastsContext)

  useEffect(() => {
    void getData()
  }, [])

  const getData = async () => {
    updateLoading(dispatch, true)
    const allPodcasts = await getAllPodcast()
    updatePodcasts(dispatch, allPodcasts)
    updateFilteredPodcasts(dispatch, allPodcasts)
    updateLoading(dispatch, false)
  }

  return {
    podcasts: podcasts,
    isLoading: isLoading,
  }
}
