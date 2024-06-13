import React from 'react'
import { PodcastItemI } from '@/api/data/Podcast'
import styles from '@/components/podcast-card/podcast-card.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  podcast: PodcastItemI
}

const PodcastCard = (props: IProps) => {
  return (
    <Link href={`podcast/${props.podcast.id.attributes['im:id']}`}>
      <div className={styles.card} data-testid="podcast-card">
        <Image
          alt={props.podcast['im:name'].label}
          src={props.podcast['im:image'][1].label}
          height={parseInt(props.podcast['im:image'][1].attributes.height)}
          width={parseInt(props.podcast['im:image'][1].attributes.height)}
          className={styles.image}
        />
        <strong>{props.podcast.title.label}</strong>
        <p>{`Author: ${props.podcast['im:artist'].label}`}</p>
      </div>
    </Link>
  )
}

export default PodcastCard
