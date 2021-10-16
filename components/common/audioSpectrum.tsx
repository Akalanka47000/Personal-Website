import { useState, useEffect } from 'react'
import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  const [muted, setMuted] = useState(true)
  const [audio, setAudio] = useState<any>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)

  useEffect(() => {
    setAudio(new Audio('/portfolio/audio/music.mp3') as HTMLAudioElement)
    setMuted(false)
    setAudioLoaded(true)
    if (audio) {
      audio.addEventListener('canplaythrough', () => {
        audio.volume = 0.1
        audio.muted = true
        audio.play()
        audio.muted = false
      })
    }
  }, [audioLoaded])

  return (
    <div>
      {audio ? (
        <div
          className="absolute w-screen bottom-0 left-0 flex justify-center opacity-80"
          id="spectrum-container"
        >
          <AudioSpectrum
            height={150}
            width={
              process.browser
                ? document.getElementById('spectrum-container')?.clientWidth
                : 1920
            }
            audioEle={audio}
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
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Spectrum
