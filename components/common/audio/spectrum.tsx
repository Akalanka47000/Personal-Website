import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  return (
    <div className="w-screen absolute bottom-0 l opacity-80">
      {process.browser ? (
        <AudioSpectrum
          id="audio-canvas"
          height={150}
          width={screen.width}
          audioId={'audio-element'}
          capColor={'#b81912'}
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
  )
}

export default Spectrum
