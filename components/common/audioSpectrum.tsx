import { useEffect } from 'react'
import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      if (process.browser) {
        var ifrm = document.createElement("iframe")
        ifrm.setAttribute("src", "/portfolio/audio/silence.mp3")
        ifrm.allow='autoplay'
        ifrm.style.display = "none"
        document.body.appendChild(ifrm)
        playAudio()
      }
    }, 4000)
  }, [])

  const playAudio = () => {
    const audio = document.getElementById('audio-element') as HTMLAudioElement
    audio.muted = true
    audio
      .play()
      .then(
        () => {
          audio.muted = false
          audio.volume = 0.05
        },
        () => {
          console.log('promise rejected')
        }
      )
      .catch(() => {
        console.log('autoplay disabled in chrome')
      })
  }

  return (
    <div>
      <audio
        id="audio-element"
        src="/portfolio/audio/music.mp3"
        autoPlay={false}
        muted
        loop
      ></audio>
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
