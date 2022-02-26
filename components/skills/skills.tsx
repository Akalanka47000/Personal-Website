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
    image: 'vue',
    logoWidth: '65%',
  },
  {
    image: 'angular',
    logoWidth: '52%',
  },
  {
    image: 'node',
    logoWidth: '45%',
  },
  {
    image: 'laravel',
    logoWidth: '50%',
  },
  {
    image: 'java',
    logoWidth: '62%',
  },
  {
    image: 'mongo',
    logoWidth: '73%',
  },
  {
    image: 'mysql',
    logoWidth: '73%',
  },
  ,
  {
    image: 'firebase',
    logoWidth: '58%',
  },
  {
    image: 'ghactions',
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
      <div
        id="skill-section"
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 cursor-default transition ease-in mt-20 lg:mt-36"
        data-aos="fade-left"
      >
        My Arsenal
      </div>
      <div className="w-full pt-20 lg:pt-36 py-36 pb-24 lg:pb-36 px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-16 lg:gap-y-24 place-items-center">
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
