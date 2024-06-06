import styles from './page.module.css';
import Header from '@/components/header/header';
import Content from '@app-components/content/content';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  );
}
