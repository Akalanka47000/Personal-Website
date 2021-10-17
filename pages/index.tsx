import type { NextPage } from 'next'
import Background from '../components/common/background'
import LoadingScreen from '../components/common/loadingScreen'
import Hero from '../components/landingPage/hero'
import Layout from '../components/layout'
import Container from '../components/layout/container'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'
import Spectrum from '../components/common/audioSpectrum'

const Home: NextPage = () => {
  return (
    <Layout title="Akalanka Perera | Portfolio">
      <Background />
      <LoadingScreen />
      <Container>
        <Navbar />
        <Hero />
        <div className="w-screen h-screen"></div>
        <Spectrum />
        <Footer />
      </Container>
    </Layout>
  )
}

export default Home
