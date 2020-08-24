import Head from 'next/head'
import dynamic from 'next/dynamic'
const ParticleBlock = dynamic(() => import('../components/ParticleBlock'),  { ssr: false })

import styles from '../styles/Home.module.css'
import HeroBlock from '../components/blocks/Hero/HeroBlock'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>There is my name and my nickname in my domain name - Jirat.Net</title>
        <meta name="description" content="Once upon a time... This domain was belong to someone else, but now it is mine!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jirat Ki - Net" key="title" />
        <meta property="og:image" content="https://jirat.net/og-image.png" />
      </Head>
      <div className={styles.backgroundContainer}>
        <ParticleBlock />
      </div>
      
      <div className={styles.scrollContainer}>
        <HeroBlock />
      </div>
    </div>
  )
}
