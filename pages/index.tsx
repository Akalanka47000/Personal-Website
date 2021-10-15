import type { NextPage } from 'next'
import Background from '../components/common/background'
import Layout from '../components/layout'
import Navbar from '../components/layout/Navbar'

const Home: NextPage = () => {
  return (
    <Layout title="Akalanka Perera | Home">
      <Background />
      <Navbar />
    </Layout>
  )
}

export default Home
