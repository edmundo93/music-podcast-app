import { Dispatch } from 'react'
import { ActionI } from './types'
import { PodcastItemI } from '@/api/data/Podcast'
import { UPDATE_FILTERED_PODCASTS, UPDATE_PODCASTS } from './constants'

export const updatePodcasts = (
  dispatch: Dispatch<ActionI>,
  podcasts: PodcastItemI[]
) => {
  dispatch({
    type: UPDATE_PODCASTS,
    payload: podcasts,
  })
}

export const updateFilteredPodcasts = (
  dispatch: Dispatch<ActionI>,
  podcasts: PodcastItemI[]
) => {
  dispatch({
    type: UPDATE_FILTERED_PODCASTS,
    payload: podcasts,
  })
}
