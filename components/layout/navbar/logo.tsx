import { useState } from 'react'

const NavbarLogo = (): JSX.Element => {
  const [imageSrc, setImageSrc] = useState('/portfolio/wolf/normal_still.gif')
  if (process.browser) {
    const logo = document.getElementById('logo') as HTMLImageElement
    logo.addEventListener('mouseenter', () => {
      setImageSrc('/portfolio/wolf/snarl.gif')
      setTimeout(() => {
        setImageSrc('/portfolio/wolf/snarl_still.gif')
      }, 200)
    })
    logo.addEventListener('mouseout', () => {
      setImageSrc('/portfolio/wolf/snarl_reversed.gif')
      setTimeout(() => {
        setImageSrc('/portfolio/wolf/normal_still.gif')
      }, 200)
    })
  }
  return <img id="logo" src={imageSrc} alt="logo" />
}

export default NavbarLogo
