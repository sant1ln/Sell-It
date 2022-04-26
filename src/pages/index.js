import { Card } from 'components/Card'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Sell it</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sell_it_logo.png" />
    </Head> 
    <main className={styles.container}>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     
    </main>
    </>
  )
}
