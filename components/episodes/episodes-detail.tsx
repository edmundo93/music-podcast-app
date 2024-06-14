'use client'

import React, { useEffect, useState } from 'react'
import '@app-styles/components/card.css'
import './episodes-detail.css'
import { getPodcastEpisodes } from '@/api/services/podcastService'
import { EpisodeI } from '@/api/data/Episode'
import SpinnerLoader from '../spinner-loader/spinner-loader'
import ListEpisodes from './list-episodes/list-episodes'
interface IProps {
  podcastId: string
}

const EpisodesDetail = (props: IProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<number>(0)
  const [episodes, setEpisodes] = useState<EpisodeI[]>([])

  useEffect(() => {
    void getEpisodesInfo()
  }, [props.podcastId])

  const getEpisodesInfo = async () => {
    setLoading(true)
    const episodesInfo: any = await getPodcastEpisodes(props.podcastId)
    if (episodesInfo) {
      setResults(episodesInfo.resultCount)
      setEpisodes(episodesInfo.results)
    } else {
      setResults(0)
      setEpisodes([])
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="loader" data-testid="loader">
        <SpinnerLoader />
      </div>
    )
  }

  return (
    <main className="main" data-testid="episodes-detail">
      <header className="header card">{`Episodes: ${results}`}</header>
      <section className="section card">
        {!loading && !episodes.length ? (
          <h1>{'No episodes found'}</h1>
        ) : (
          <ListEpisodes episodes={episodes} />
        )}
      </section>
    </main>
  )
}

export default EpisodesDetail
