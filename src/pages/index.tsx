import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>Start focusing</div>
        <div className={styles.countdown}>25:00</div>
        <div className={styles.rounded}>start</div>
      </main>
    </div>
  )
}
