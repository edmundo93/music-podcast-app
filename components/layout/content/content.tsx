'use client'

import React from 'react'
import styles from '@app-components/layout/content/content.module.css'
import SearchSection from '../../search-section'
import PodcastList from '@/components/podcast-list/podcast-list'
import PodcastListSkeleton from '@/components/ui/podcast-list-skeleton/podcast-list-skeleton'
import { useGetPodcast } from '@/hooks/useGetPodcast'

const Content = () => {
  const { isLoading } = useGetPodcast()

  return (
    <div className={styles.content} data-testid="content">
      <SearchSection />
      {isLoading ? <PodcastListSkeleton /> : <PodcastList />}
    </div>
  )
}

export default Content
