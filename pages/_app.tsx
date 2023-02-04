import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import Aos from 'aos'
import Layout from '../components/layout'
import store from '../store'
import 'tailwindcss/tailwind.css'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import '../styles/animations.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
    if (process.browser) {
      window.addEventListener('load', Aos.refresh)
    }
  }, [])
  return (
    <Provider store={store}>
      <Layout title="Akalanka Perera | Portfolio">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
