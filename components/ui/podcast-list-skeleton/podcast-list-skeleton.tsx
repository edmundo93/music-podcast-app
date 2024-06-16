import styles from '@app-components/ui/podcast-list-skeleton/podcast-list-skeleton.module.css'
import '@app-styles/utils/layout.css'
import PodcastItemSkeleton from './podcast-item-skeleton'

const PodcastListSkeleton = () => {
  return (
    <div
      className={`${styles.container} row`}
      data-testid="podcast-list-skeleton"
    >
      {Array(50)
        .fill(null)
        .map((_, index) => (
          <PodcastItemSkeleton key={index} />
        ))}
    </div>
  )
}

export default PodcastListSkeleton
