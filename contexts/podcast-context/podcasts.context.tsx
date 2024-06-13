'use client'

import { createContext, useMemo, useReducer } from 'react'
import { PodcastContextI } from './types'
import { PodcastsReducer, PodcastsState } from './podcasts.state'

interface IProps {
  children: React.ReactNode
}

export const PodcastsContext = createContext<PodcastContextI>({
  dispatch: () => {},
  podcasts: [],
  filteredPodcasts: [],
  isLoading: false,
})

export const PodcastsContextProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(PodcastsReducer, PodcastsState)

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state, dispatch]
  )

  return (
    <PodcastsContext.Provider value={value}>
      {props.children}
    </PodcastsContext.Provider>
  )
}
