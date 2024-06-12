'use client'

import React, { useEffect, useState } from 'react'
import styles from '@app-components/layout/content/content.module.css'
import SearchSection from '../../search-section'
import { PodcastItemI } from '@/api/data/Podcast'
import { getAllPodcast } from '@/api/services/podcastService'
import PodcastList from '@/components/podcast-list/podcast-list'

const Content = () => {
  const [podcasts, setPodcasts] = useState<PodcastItemI[]>([])

  useEffect(() => {
    void getData()
  }, [])

  const getData = async () => {
    const allPodcasts = await getAllPodcast()
    setPodcasts(allPodcasts)
  }

  return (
    <div className={styles.content} data-testid="content">
      <SearchSection />
      <PodcastList podcasts={podcasts} />
    </div>
  )
}

export default Content
