import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Carbon Disclosure Network app" />
        <p className="description">
        <img src="/cdn_ads_664px.png" alt="Carbon Disclosure Network advertisement" />  
        </p>
      </main>

      <Footer />
    </div>
  )
}
