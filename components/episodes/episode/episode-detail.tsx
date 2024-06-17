'use client'

import React, { useEffect, useState } from 'react'

import { useEpisodes } from '@/hooks/useEpisodes'
import { EpisodeI } from '@/api/data/Episode'

import '@app-styles/components/card.css'
import styles from './episode-detail.module.css'
import AudioPlayer from '@/components/ui/audio-player/audio-player'
import SpinnerLoader from '@/components/spinner-loader/spinner-loader'

interface IProps {
  id: string
  episodeId: string
}

const EpisodeDetail = (props: IProps) => {
  const { getEpisode } = useEpisodes(props.id)
  const [episode, setEpisode] = useState<EpisodeI | undefined>()
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    const episodeInf = getEpisode(props.episodeId)
    setEpisode(episodeInf)
  }, [props.episodeId, getEpisode])

  useEffect(() => {
    if (episode?.description) {
      const formatedText = formatText(episode.description)
      setDescription(formatedText)
    }
  }, [episode])

  const formatText = (text: string): string => {
    // Convertir URLs en enlaces
    const withHttpLinks = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank">$1</a>'
    )
    const withLinks = withHttpLinks.replace(
      /(?:^|\s)(www.[^\s]+)/g,
      '<a href="http://$1" target="_blank">$1</a>'
    )

    // Convertir saltos de línea en <br>
    const withLineBreaks = withLinks.replace(/\n/g, '<br>')
    return withLineBreaks
  }

  if (!episode) {
    return <SpinnerLoader />
  }

  return (
    <section
      className={`${styles.container} card`}
      data-testid={'episode-detail'}
    >
      <h2>{episode?.trackName}</h2>
      <div className={styles.description}>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <AudioPlayer src={episode?.episodeUrl} fullWidth={true} />
    </section>
  )
}

export default EpisodeDetail
