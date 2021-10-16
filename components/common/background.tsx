import React from 'react'

const Background = (): JSX.Element => {
  if (process.browser) {
    setTimeout(() => {
      const bgVideo = document.getElementById('bgVideo') as HTMLVideoElement
      if (bgVideo) {
        bgVideo.play()
      }
    }, 4000)
  }
  return (
    <>
      <div className="w-screen h-screen fixed bg-black-normal z-0"></div>
      <video
        id="bgVideo"
        className="w-screen h-screen object-cover fixed top-0 z-10 opacity-50 pointer-events-none"
        autoPlay
        muted
        loop
        disablePictureInPicture
      >
        <source src="/portfolio/home/background.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default Background
