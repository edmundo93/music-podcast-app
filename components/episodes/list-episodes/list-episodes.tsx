import React, { useEffect, useState } from 'react'
import { EpisodeI } from '@/api/data/Episode'
import Table from '@/components/ui/table/table'
import Link from 'next/link'
import { formatDate } from '@/utils/dateUtils'
import { formatMillisecons } from '@/utils/timeUtils'

import styles from './list-episodes..module.css'

interface IProps {
  episodes: EpisodeI[]
}

const ListEpisodes = (props: IProps) => {
  const [tableValues, setTableValues] = useState<any>([])

  useEffect(() => {
    const values = props.episodes.map((episode) => [
      <Link
        href={`/episode/${episode.trackId}`}
        key={episode.trackId}
        className={styles.link}
      >
        {episode.trackName}
      </Link>,
      formatDate(episode.releaseDate),
      formatMillisecons(episode.trackTimeMillis),
    ])
    setTableValues(values)
  }, [props.episodes])

  return (
    <Table
      headValues={['Title', 'Date', 'Duration']}
      bodyValues={tableValues}
    />
  )
}

export default ListEpisodes
