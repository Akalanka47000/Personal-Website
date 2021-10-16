import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  const playAudio = () => {
    if (process.browser) {
      const audioElement = document.getElementById(
        'audio-element'
      ) as HTMLAudioElement
      if (audioElement) {
        audioElement.volume = 0.1
        audioElement.play()
        audioElement.style.height = '0px'
        audioElement.style.width = '0px'
      }
    }
  }

  return (
    <div>
      <audio
        id="audio-element"
        src="/portfolio//audio/music.mp3"
        muted={false}
        loop
        controls
        className="h-screen w-screen bg-white fixed left-0 top-0 z-50 opacity-0"
        onMouseOver={playAudio}
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
