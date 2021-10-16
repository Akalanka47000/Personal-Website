import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  if (process.browser) {
    document.body.addEventListener('mousemove', function () {
      const audioElement = document.getElementById(
        'audio-element'
      ) as HTMLAudioElement
      audioElement.volume = 0.1
      audioElement.play()
    })
  }
  return (
    <body>
      <audio id="audio-element" src="/portfolio//audio/music.mp3" loop></audio>
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
    </body>
  )
}

export default Spectrum
