const achievements = [
  {
    title: 'Winner',
    event: 'SLASSCOM Ingenuity Awards 2021',
  },
  {
    title: 'Winner',
    event: 'Haxmas 2021',
  },
  {
    title: 'Winner',
    event: 'Algothon 2021',
  },
  {
    title: '2nd Runners Up',
    event: 'SLIIT Extreme 2021',
  },
]
const Achievements = (): JSX.Element => {
  return (
    <>
      <div
       id="achievement-section"
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 cursor-default transition ease-in mt-16"
        data-aos="fade-left"
      >
        Achievements
      </div>
      <div
        className="w-full pt-20 lg:pt-36 py-36 pb-24 lg:pb-36 px-10 grid grid-cols-1 md:grid-cols-4 gap-y-16 lg:gap-y-24 place-items-center"
      >
        {achievements.map((achievement, index) => {
          return (
            <div  key={index} className="flex flex-col w-[50vw] sm:w-[40vw] md:w-[17vw] items-center"  data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}>
                <img src="/achievements/logo.png" className="opacity-90 saturate-[10%] brightness-125"></img>
                <div className="font-bold text-4xl text-center text-primary blink cursor-default transition ease-in">
                  {achievement.title}
                </div>
                <div className="font-bold text-lg md:text-xl xl:text-2xl text-white text-center mt-6 cursor-default transition ease-in">
                  {achievement.event}
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
}

export default Achievements
