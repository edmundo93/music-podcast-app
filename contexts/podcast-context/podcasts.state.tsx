import { UPDATE_FILTERED_PODCASTS, UPDATE_PODCASTS } from './constants'
import { ActionI, PodcastsStateI } from './types'

export const PodcastsState: PodcastsStateI = {
  podcasts: [],
  filteredPodcasts: [],
}

export const PodcastsReducer = (state: PodcastsStateI, action: ActionI) => {
  switch (action.type) {
    case UPDATE_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
      }
    case UPDATE_FILTERED_PODCASTS:
      return {
        ...state,
        filteredPodcasts: action.payload,
      }
    default:
      return PodcastsState
  }
}
