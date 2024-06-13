import styles from '@app-components/ui/podcast-list-skeleton/item-skeleton.module.css'
import '@app-styles/utils/mixins.css'

const PodcastItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.image} loading`} />
      <div className={`${styles.text} ${styles.title} loading`} />
      <div className={`${styles.text} ${styles.subtitle} loading`} />
    </div>
  )
}

export default PodcastItemSkeleton
