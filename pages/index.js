import Head from 'next/head'
import dynamic from 'next/dynamic'
const ParticleBlock = dynamic(() => import('../components/ParticleBlock'),  { ssr: false })

import styles from '../styles/Home.module.css'
import HeroBlock from '../components/blocks/Hero/HeroBlock'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jirat (Net) Ki.</title>
        <link rel="icon" href="/favicon.ico" />
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
