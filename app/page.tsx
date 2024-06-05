import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          MUSIC PODCAST APP
        </h1>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/pod-icon.png"
          alt="Podcast Icon"
          width={100}
          height={100}
          priority
        />
      </div>
    </main>
  );
}
