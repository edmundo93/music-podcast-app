import styles from './page.module.css'
import NavBar from '@/components/layout/nav-bar/nav-bar'
import Content from '@/components/layout/content/content'

const Home = () => {
  return (
    <main className={styles.main}>
      <NavBar />
      <Content />
    </main>
  )
}

export default Home
