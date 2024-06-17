'use client'

import React from 'react'
import '@app-styles/components/card.css'
import './episodes-detail.css'
import SpinnerLoader from '../spinner-loader/spinner-loader'
import ListEpisodes from './list-episodes/list-episodes'
import { useEpisodes } from '@/hooks/useEpisodes'
interface IProps {
  podcastId: string
}

const EpisodesDetail = (props: IProps) => {
  const { loading, results, episodes } = useEpisodes(props.podcastId)

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
          <ListEpisodes podcastId={props.podcastId} episodes={episodes} />
        )}
      </section>
    </main>
  )
}

export default EpisodesDetail
