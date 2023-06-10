import type { NextPage } from 'next'
import Background from '../components/common/background'
import Loader from '../components/common/loader'
import Hero from '../components/landing/hero'
import Container from '../components/layout/container'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'
import Skills from '../components/skills/skills'
import Resume from '../components/resume'
import AudioControl from '../components/common/audio/control'
import ProjectCarousel from '../components/projects'
import Achievements from '../components/achivements'

const Home: NextPage = () => {
  return (
    <>
      <Background />
      <Loader />
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
    </>
  )
}

export default Home
