import styles from '../styles/PageNotFound_404.module.css'
import Head from 'next/head'

export default function PageNotFound_404() {
    return (
        <>
            <Head>
                <title>404 : Sayfa bulunamadı</title>
                <meta name="robots" content="follow, noarchive, noindex" />
            </Head>
            <div className={styles.PageNotFound_404} >
                <h3>Sayfa Bulunamadı</h3>
                <p>Ana sayfaya dönmek için <a href="/">tıklayın.</a></p>
            </div>
        </>
        )
  }

