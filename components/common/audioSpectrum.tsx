import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  let playing = false
  if (process.browser) {
    const audio = document.createElement('AUDIO') as HTMLAudioElement
    audio.id = 'audio-element'
    audio.src = '/portfolio//audio/music.mp3'
    audio.loop = true
    document.body.appendChild(audio)
    document.body.addEventListener('mouseover', () => {
      console.log("dsfsdf")
      if (!playing) {
        try {
          audio.play()
          audio.volume = 0.035
          playing = true
        } catch(e) {
          console.log('autoplay disabled in chrome')
        }
      }
    })
  }

  return (
    <div>
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
