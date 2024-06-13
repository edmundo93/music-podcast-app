import styles from '@app-components/ui/podcast-list-skeleton/podcast-list-skeleton.module.css'
import '@app-styles/utils/layout.css'
import PodcastItemSkeleton from './podcast-item-skeleton'

const PodcastListSkeleton = () => {
  return (
    <div className={`${styles.container} row`}>
      {Array(50)
        .fill(<PodcastItemSkeleton />)
        .map((item) => item)}
    </div>
  )
}

export default PodcastListSkeleton
