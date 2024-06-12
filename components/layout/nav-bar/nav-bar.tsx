import styles from '@app-components/layout/nav-bar/nav-bar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={styles.navbar} data-testid="navbar">
      <Link href="/" replace>
        {'Podcaster'}
      </Link>
    </div>
  )
}

export default NavBar
