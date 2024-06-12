import { PodcastItemI } from '@/api/data/Podcast'
import { Dispatch } from 'react'

export interface PodcastsStateI {
  podcasts: PodcastItemI[]
  filteredPodcasts: PodcastItemI[]
}

export type UpdatePodcastsT = 'UPDATE_PODCASTS'

export type UpdateFilteredPodcastsT = 'UPDATE_FILTERED_PODCASTS'

export type ActionTypeT = 'UPDATE_PODCASTS' | 'UPDATE_FILTERED_PODCASTS'

export type ActionPayloadT = PodcastItemI[]

export interface ActionI {
  type: ActionTypeT
  payload: ActionPayloadT
}

export interface PodcastContextI extends PodcastsStateI {
  dispatch: Dispatch<any>
}
