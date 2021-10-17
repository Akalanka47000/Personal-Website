import SkillCard from './skillCard'

const skillSet = [
  {
    image: 'flutter',
    logoWidth: '53%',
  },
  {
    image: 'react',
    logoWidth: '65%',
  },
  {
    image: 'Angular',
    logoWidth: '52%',
  },
  {
    image: 'node',
    logoWidth: '45%',
  },
  {
    image: 'java',
    logoWidth: '62%',
  },
  {
    image: 'mongo',
    logoWidth: '73%',
  },
  ,
  {
    image: 'firebase',
    logoWidth: '58%',
  },
  ,
  {
    image: 'AE',
    logoWidth: '65%',
  },
]
const Skills = (): JSX.Element => {
  return (
    <>
      <div className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 cursor-default transition ease-in mt-24 lg:mt-36 ">
        My Arsenal
      </div>
      <div
        id="skill-section"
        className="w-full pt-24 lg:pt-36 py-36 px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-16 lg:gap-y-24 place-items-center"
      >
        {skillSet.map((skill, index) => {
          return (
            <div
              data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              key={index}
            >
              <SkillCard
                logo={skill?.image || ''}
                width={skill?.logoWidth || ''}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Skills
