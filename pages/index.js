import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next 4 Frogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Welcome to the Next 4 Frogs !</h1>
    </div>
  )
}
