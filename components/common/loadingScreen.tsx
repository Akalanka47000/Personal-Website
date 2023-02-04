import { css } from '@emotion/react'
import BarLoader from 'react-spinners/BarLoader'
import NavbarLogo from '../layout/navbar/logo'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const LoadingScreen = (): JSX.Element => {
  if (process.browser) {
    const loader = document.getElementById('loader')
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0'
        loader.style.pointerEvents = 'none'
      }, 3000)
    }
  }
  return (
    <div
      id="loader"
      className="w-full h-full flex flex-col justify-center items-center fixed top-0 z-[60] bg-black-normal transition ease duration-500"
    >
      <div className="w-[40vw] h-[40vw] md:w-[16.5vw] md:h-[16.5vw] mb-12">
        <NavbarLogo />
      </div>
      <div className="sweet-loading w-[45vw] md:w-[20vw]">
        <BarLoader
          color={'#ff4000'}
          loading={true}
          css={override}
          width={'100%'}
        />
      </div>
    </div>
  )
}

export default LoadingScreen
