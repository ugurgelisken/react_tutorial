import styles from '../../styles/About.module.css'
import Head from 'next/head'

export default function About() {
  return (
    <>
    <Head>
        <title>About</title>
        <meta name="description" content="about sayfası ile ilgili açıklama..." />
        <meta name="keywords" content="about, react, next" />
      </Head>
    <div className={styles.About} >
      <h1>About sayfası</h1>
    </div>
    </>
  )
}