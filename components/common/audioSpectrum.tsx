import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  if (process.browser) {
    const audioElement = document.getElementById(
      'audio-element'
    ) as HTMLAudioElement
    if (audioElement) {
      audioElement.volume = 0.1
      audioElement.play()
    }
  }
  return (
    <div >
      <audio id="audio-element" src="audio/music.mp3" loop></audio>
      <div className="fixed w-screen bottom-0 left-0 flex justify-center opacity-20" id="spectrum-container">
      <AudioSpectrum
        id="audio-spectrum"
        height={100}
        width={process.browser?(document.getElementById("spectrum-container")?.clientWidth):1920}
        audioId={'audio-element'}
        capColor={'white'}
        capHeight={2}
        meterWidth={2}
        meterCount={2000}
        meterColor={[
          { stop: 0, color: '#ffffff' },
          { stop: 0.5, color: '#000000' },
          { stop: 1, color: '#ffffff' },
        ]}
        gap={4}
      />
      </div>
      
    </div>
  )
}

export default Spectrum
