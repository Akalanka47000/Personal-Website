import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ApplicationState from '@appstate'
import SkillCard from './skillCard'
import skills from './data'

const Skills = (): JSX.Element => {

  const { hoveredCard } = useSelector((state: ApplicationState) => state.ui.skills)

  useEffect(() => {}, [hoveredCard])

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
        {skills.map((skill, index) => {
          return (
            <div
              data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              key={index}
            >
              <SkillCard
                index={index}
                name= {skill?.name || ''}
                logo={skill?.image || ''}
                width={skill?.logoWidth || ''}
                link={skill?.link || ''}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Skills
