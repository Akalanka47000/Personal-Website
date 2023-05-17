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
      <div className="w-full h-full fixed bg-fixed bg-black-normal z-0"></div>
      <video
        id="bgVideo"
        className="w-full h-full object-cover fixed bg-fixed top-0 z-10 opacity-50 pointer-events-none"
        autoPlay
        muted
        loop
        disablePictureInPicture
      >
        <source src="/home/background.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default Background
