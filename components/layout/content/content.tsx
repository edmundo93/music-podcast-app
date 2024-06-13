'use client'

import React, { useEffect, useContext } from 'react'
import styles from '@app-components/layout/content/content.module.css'
import SearchSection from '../../search-section'
import { getAllPodcast } from '@/api/services/podcastService'
import PodcastList from '@/components/podcast-list/podcast-list'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'
import { PodcastContextI } from '@/contexts/podcast-context/types'
import {
  updateFilteredPodcasts,
  updateLoading,
  updatePodcasts,
} from '@/contexts/podcast-context/podcasts.actions'
import PodcastListSkeleton from '@/components/ui/podcast-list-skeleton/podcast-list-skeleton'

const Content = () => {
  const { dispatch, isLoading } = useContext<PodcastContextI>(PodcastsContext)

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

  return (
    <div className={styles.content} data-testid="content">
      <SearchSection />
      {isLoading ? <PodcastListSkeleton /> : <PodcastList />}
    </div>
  )
}

export default Content
