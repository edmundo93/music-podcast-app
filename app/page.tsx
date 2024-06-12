import styles from './page.module.css'
import NavBar from '@/components/layout/nav-bar/nav-bar'
import Content from '@/components/layout/content/content'
import { PodcastsContextProvider } from '@/contexts/podcast-context/podcasts.context'

const Home = () => {
  return (
    <main className={styles.main}>
      <PodcastsContextProvider>
        <NavBar />
        <Content />
      </PodcastsContextProvider>
    </main>
  )
}

export default Home
