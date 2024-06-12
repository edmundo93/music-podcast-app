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
  updatePodcasts,
} from '@/contexts/podcast-context/podcasts.actions'

const Content = () => {
  const { dispatch } = useContext<PodcastContextI>(PodcastsContext)

  useEffect(() => {
    void getData()
  }, [])

  const getData = async () => {
    const allPodcasts = await getAllPodcast()
    updatePodcasts(dispatch, allPodcasts)
    updateFilteredPodcasts(dispatch, allPodcasts)
  }

  return (
    <div className={styles.content} data-testid="content">
      <SearchSection />
      <PodcastList />
    </div>
  )
}

export default Content
