import type { NextPage } from 'next'
import Background from '../components/common/background'
import Layout from '../components/layout'
import Container from '../components/layout/container'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'

const Home: NextPage = () => {
  return (
    <Layout title="Akalanka Perera | Home">
      <Background />
      <Container>
        <Navbar />
        <div className="w-screen h-screen"></div>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Home
