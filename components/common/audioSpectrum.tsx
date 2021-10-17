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
        className="w-20 h-20 flex justify-center items-center bg-orange-dark rounded-full cursor-pointer sticky bottom-8 left-full mr-8 mb-8 filter hover:brightness-125 transition ease duration-500"
        onClick={toggleAudio}
      >
        {playing ? (
          <CgPlayPause size={60} className="fill-current-color" />
        ) : (
          <MdPlayArrow size={50} className="fill-current-color" />
        )}
      </div>
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
    </>
  )
}

export default Spectrum
