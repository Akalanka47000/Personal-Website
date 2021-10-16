import React from 'react'

const Background = (): JSX.Element => {
  return (
    <>
      <div className="w-screen h-screen fixed bg-black-normal z-0"></div>
      <video
        className="w-screen h-screen object-cover fixed top-0 z-10 opacity-50 pointer-events-none" autoPlay loop disablePictureInPicture
      >
        <source src="home/background.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default Background
