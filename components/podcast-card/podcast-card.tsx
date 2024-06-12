import React from 'react'
import { PodcastItemI } from '@/api/data/Podcast'
import styles from '@/components/podcast-card/podcast-card.module.css'
import Image from 'next/image'

interface IProps {
  podcast: PodcastItemI
}

const PodcastCard = (props: IProps) => {
  return (
    <div className={styles.card} data-testid="podcast-card">
      <Image
        alt={props.podcast['im:name'].label}
        src={props.podcast['im:image'][1].label}
        height={parseInt(props.podcast['im:image'][1].attributes.height)}
        width={parseInt(props.podcast['im:image'][1].attributes.height)}
        className={styles.image}
      />
      <strong>{props.podcast.title.label}</strong>
      <p>{props.podcast['im:artist'].label}</p>
    </div>
  )
}

export default PodcastCard
