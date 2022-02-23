import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header className={styles.header}/>

      <main className={styles.main}>
        <h3>
         {process.env.NEXT_PUBLIC_API_URL}
        </h3>
      </main>

      <Footer  className={styles.footer}/>

    </div>
  )
}

export default Home
