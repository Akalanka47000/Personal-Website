import type { NextPage } from 'next'
import { AudioControl, Background, Loader } from '@/components/common'
import { Achievements, Hero, Projects, Resume, Skills } from '@/components/landing'
import { Container, Footer, Navbar } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Background />
      <Loader />
      <Container>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
      </Container>
      <AudioControl />
      <Footer />
    </>
  )
}

export default Home
