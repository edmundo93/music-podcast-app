import { PodcastItemI } from '@/api/data/Podcast'
import { Dispatch } from 'react'

export interface PodcastsStateI {
  podcasts: PodcastItemI[]
  filteredPodcasts: PodcastItemI[]
  isLoading: boolean
}

export type UpdatePodcastsT = 'UPDATE_PODCASTS'
export type UpdateFilteredPodcastsT = 'UPDATE_FILTERED_PODCASTS'
export type UpdateLoadingT = 'UPDATE_LOADING'

export type ActionTypeT =
  | 'UPDATE_PODCASTS'
  | 'UPDATE_FILTERED_PODCASTS'
  | 'UPDATE_LOADING'

export interface ActionI {
  type: ActionTypeT
  payload: any
}

export interface PodcastContextI extends PodcastsStateI {
  dispatch: Dispatch<any>
}
