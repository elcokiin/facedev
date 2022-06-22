import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../components/AppLayout/'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>facedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <h1>Welcome to facedev</h1>
      </AppLayout>
    </>
  )
}

export default Home
