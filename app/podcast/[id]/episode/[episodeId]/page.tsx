import React from 'react'
import EpisodeDetail from '@/components/episodes/episode/episode-detail'

interface IProps {
  params: { id: string; episodeId: string }
  searchParams: any
}

const PodcastEpisode = (props: IProps) => {
  return (
    <EpisodeDetail id={props.params.id} episodeId={props.params.episodeId} />
  )
}

export default PodcastEpisode
