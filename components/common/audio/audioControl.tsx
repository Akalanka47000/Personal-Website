import { useState } from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { CgPlayPause } from 'react-icons/cg'

const AudioControl = (): JSX.Element => {
  const [playing, setPlaying] = useState(false)

  const toggleAudio = () => {
    const audio = document.getElementById('audio-element') as HTMLAudioElement
    if (playing) {
      audio.pause()
    } else {
      audio.play()
      audio.volume = 0.2
    }
    setPlaying(!playing)
  }

  return (
    <>
      <div
        className="w-16 h-16 md:w-17 md:h-17 lg:w-20 lg:h-20 flex justify-center items-center bg-orange-dark rounded-full cursor-pointer sticky z-40 bottom-8 left-full mr-8 mb-8 filter hover:brightness-125 border-t-2 border-transparent hover:border-red-300 transform hover:rotate-[360deg] transition ease duration-500"
        onClick={toggleAudio}
      >
        {playing ? (
          <CgPlayPause
            size={53}
            className="fill-current-color transform absolute md:scale-110"
          />
        ) : (
          <MdPlayArrow
            size={44}
            className="fill-current-color transform absolute md:scale-110"
          />
        )}
      </div>
      <audio id="audio-element" src="/portfolio/audio/music.mp3" loop></audio>
    </>
  )
}

export default AudioControl
