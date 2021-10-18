import type { NextPage } from 'next'
import Background from '../components/common/background'
import LoadingScreen from '../components/common/loadingScreen'
import Hero from '../components/landingPage/hero'
import Layout from '../components/layout'
import Container from '../components/layout/container'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'
import Skills from '../components/skills/skills'
import Resume from '../components/resume'
import AudioControl from '../components/common/audio/audioControl'
import ProjectCarousel from '../components/projects'
import Achievements from '../components/achivements'

const Home: NextPage = () => {
  return (
    <Layout title="Akalanka Perera | Portfolio">
      <Background />
      <LoadingScreen />
      <Container>
        <Navbar />
        <Hero />
        <Skills />
        <ProjectCarousel />
        <Achievements />
        <Resume />
      </Container>
      <AudioControl />
      <Footer />
    </Layout>
  )
}

export default Home
