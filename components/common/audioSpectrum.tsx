import { useState } from 'react'
import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  const [hovered, setHovered] = useState(false)
  const playAudio = () => {
    if (!hovered) {
      setHovered(true)
      const audio = document.getElementById('audio-element') as HTMLAudioElement
      audio.volume = 0.05
      audio
        .play()
        .then(
          () => {
            const button = document.getElementById(
              'dummyBtn'
            ) as HTMLButtonElement
            button.style.display = 'none'
          },
          () => {
            console.log('promise rejected')
            setHovered(false)
          }
        )
        .catch(() => {
          console.log('autoplay disabled in chrome')
          setHovered(false)
        })
    }
  }

  return (
    <div>
      <button
        id="dummyBtn"
        className="h-screen w-screen fixed top-0 left-0 z-50 cursor-default"
        onMouseMove={playAudio}
      ></button>
      <audio id="audio-element" src="/portfolio/audio/music.mp3" loop></audio>
      <div
        className="absolute w-screen bottom-0 left-0 flex justify-center opacity-80"
        id="spectrum-container"
      >
        <AudioSpectrum
          id="audio-canvas"
          height={150}
          width={
            process.browser
              ? document.getElementById('spectrum-container')?.clientWidth
              : 1920
          }
          audioId={'audio-element'}
          capColor={'#ff4000'}
          capHeight={6}
          meterWidth={3}
          meterCount={1000}
          meterColor={[
            { stop: 0, color: '#ffffff' },
            { stop: 0.5, color: '#000000' },
            { stop: 1, color: '#ffffff' },
          ]}
          gap={8}
        />
      </div>
    </div>
  )
}

export default Spectrum
