'use client'

import { PodcastItemI } from '@/api/data/Podcast'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import './podcast-detail.css'
import '@app-styles/utils/layout.css'
import '@app-styles/components/card.css'
import { useGetPodcast } from '@/hooks/useGetPodcast'

interface IProps {
  podcastId: string
}

const PodcastDetail = (props: IProps) => {
  const { podcasts } = useGetPodcast()
  const [podcast, setPodcast] = useState<PodcastItemI>()

  useEffect(() => {
    getPodcast()
  }, [podcasts, props.podcastId])

  const getPodcast = () => {
    const selectedPodcast = podcasts.find(
      (pod) => pod.id.attributes['im:id'] === props.podcastId
    )
    setPodcast(selectedPodcast)
  }

  return (
    <div className="container card">
      <div className="image">
        {podcast && (
          <Image
            src={podcast['im:image'][2].label}
            alt={'podcast image'}
            width={120}
            height={120}
          />
        )}
      </div>
      <div className="author column">
        <div className="title">{podcast?.title.label}</div>
        <div className="text">{`by ${podcast?.['im:artist'].label}`}</div>
      </div>
      <div className="description column">
        <div className="title">Description:</div>
        <div className="text">{podcast?.summary.label}</div>
      </div>
    </div>
  )
}

export default PodcastDetail
