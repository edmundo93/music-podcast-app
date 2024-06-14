import React from 'react'
import EpisodesDetail from '@/components/episodes/episodes-detail'
interface IProps {
  params: { id: string }
  searchParams: any
}

const PodcastEpisodes = (props: IProps) => {
  return <EpisodesDetail podcastId={props.params.id} />
}

export default PodcastEpisodes
