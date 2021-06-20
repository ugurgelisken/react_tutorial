import '../styles/globals.css'

import Head from 'next/head'
import Header from '../layout/header/index'
import Footer from '../layout/footer/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Merhaba Dünya</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="React ve Next.js ile SPA denemeleri" />
        <meta name="keywords" content="react, spa, next.js, uğur, gelişken" />
        <meta name="author" content="Uğur GELİŞKEN" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp