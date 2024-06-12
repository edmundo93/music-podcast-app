'use client'

import { PodcastItemI } from '@/api/data/Podcast'
import '@app-styles/utils/layout.css'
import styles from '@app-components/podcast-list/podcast-list.module.css'
import PodcastCard from '@app-components/podcast-card/podcast-card'
import { useContext } from 'react'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'

const PodcastList = () => {
  const { filteredPodcasts } = useContext(PodcastsContext)

  return (
    <div className={`${styles.container} row`} data-testid="podcast-list">
      {filteredPodcasts.map((podcast: PodcastItemI) => (
        <PodcastCard key={podcast.id.label} podcast={podcast} />
      ))}
    </div>
  )
}

export default PodcastList
