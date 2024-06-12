import { PodcastItemI } from '@/api/data/Podcast'
import '@app-styles/utils/layout.css'
import styles from '@app-components/podcast-list/podcast-list.module.css'
import PodcastCard from '@app-components/podcast-card/podcast-card'

interface IProps {
  podcasts: PodcastItemI[]
}

const PodcastList = (props: IProps) => {
  return (
    <div className={`${styles.container} row`} data-testid="podcast-list">
      {props.podcasts.map((podcast) => (
        <PodcastCard key={podcast.id.label} podcast={podcast} />
      ))}
    </div>
  )
}

export default PodcastList
