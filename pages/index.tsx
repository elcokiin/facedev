import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../components/AppLayout/'
import Button from '../components/Button';

// Icons
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

import { colors } from '../styles/theme';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>facedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          {/* <img src="/facedev-logo.svg" alt="Logo" /> */}
          <figure title="facedev"></figure>
          <h1>Facedev</h1>
          <h2>Publish about development with developers 👨‍💻 👩‍💻 </h2>
          <div>
            <Button onClick={()=>2}>
              <BsGithub />
              <span>Login with Github</span>
            </Button> 
            <Button onClick={()=>2}>
              <BsFacebook />
              <span>Login with Facebook</span>
            </Button>
          </div> 
        </section>
      </AppLayout> 
      <style jsx>{`
        section {
          margin: 0 8px;
          height: 100%;
          display: grid;
          place-items: center;
          place-content: center;
        }
        img {
          width: 120px;
        }
        figure {
          width: 120px;
          height: 120px;
          background-image: url('/facedev-logo.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 20px;
          margin-top: 8px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 16px;
        }
        div {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Home
