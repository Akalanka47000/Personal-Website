import { useState } from 'react'
import AudioSpectrum from 'react-audio-spectrum'
import { MdPlayArrow } from 'react-icons/md'
import { CgPlayPause } from 'react-icons/cg'

const Spectrum = (): JSX.Element => {
  const [playing, setPlaying] = useState(false)

  const toggleAudio = () => {
    const audio = document.getElementById('audio-element') as HTMLAudioElement
    if (playing) {
      audio.pause()
    } else {
      audio.play()
      audio.volume = 0.05
    }
    setPlaying(!playing)
  }

  return (
    <>
      <div
        className="w-16 h-16 md:w-17 md:h-17 lg:w-20 lg:h-20 flex justify-center items-center bg-orange-dark rounded-full cursor-pointer sticky bottom-8 left-full mr-8 mb-8 filter hover:brightness-125 transition ease duration-500"
        onClick={toggleAudio}
      >
        {playing ? (
          <CgPlayPause size={53} className="fill-current-color transform md:scale-110" />
        ) : (
          <MdPlayArrow size={44} className="fill-current-color transform md:scale-110" />
        )}
      </div>
      <audio id="audio-element" src="/portfolio/audio/music.mp3" loop></audio>
      <div
        className="w-screen absolute bottom-0 l opacity-80"
        id="spectrum-container"
      >
        {process.browser ? (
          <AudioSpectrum
            id="audio-canvas"
            height={150}
            width={screen.width}
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
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default Spectrum
