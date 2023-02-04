import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ApplicationState from '@appstate'
import SkillCard from './skillCard'
import useEffectOnce from '../../hooks/useEffectOnce'
import skills from './data'

const Skills = (): JSX.Element => {
  const { hoveredCard } = useSelector(
    (state: ApplicationState) => state.ui.skills
  )

  const [scrollPosition, setScrollPosition] = useState<Number>(0)
  const [lastRendered, setLastRendered] = useState<String>()

  useEffectOnce(() => {
    const onScroll = (e: any) => {
      setScrollPosition(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  const cleanGrid = () => {
    document.querySelectorAll('.lightning-grid-line').forEach((line) => {
      line.remove()
    })
    setLastRendered(undefined)
  }

  useEffect(() => {
    if (process.browser) {
      cleanGrid()
      if (hoveredCard) {
        const center = document.getElementById(hoveredCard)?.getBoundingClientRect()
        skills.forEach((_skill, index) => {
          if (index !== Number(hoveredCard.split('-').pop())) {
            const target = document
              .getElementById(`skill-card-${index}`)
              ?.getBoundingClientRect()
            const line = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'line'
            )
            line.setAttribute('class', `lightning-grid-line vh ${lastRendered !== hoveredCard ? 'animate-grid-mesh' : ''}`)
            line.setAttribute(
              'x1',
              (center!.left + center!.width / 2).toString()
            )
            line.setAttribute(
              'y1',
              (center!.top + center!.height / 2).toString()
            )
            line.setAttribute(
              'x2',
              (target!.left + target!.width / 2).toString()
            )
            line.setAttribute(
              'y2',
              (target!.top + target!.height / 2).toString()
            )
            line.setAttribute('style', 'stroke: #ff4000; stroke-width: 1; pointer-events: none; opacity: 0.5;')
            document.getElementById('lightning-grid')?.append(line)
          }
        })
        setLastRendered(hoveredCard)
      }
    }
  }, [hoveredCard, scrollPosition])

  return (
    <>
      <div
        id="skill-section"
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 cursor-default transition ease-in mt-20 lg:mt-36"
        data-aos="fade-left"
      >
        My Arsenal
      </div>
      <div className="w-full pt-20 lg:pt-36 py-36 pb-24 lg:pb-36 px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 gap-y-16 lg:gap-y-24 place-items-center">
        {skills.map((skill, index) => {
          return (
            <div
              data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              key={index}
            >
              <SkillCard
                index={index}
                name={skill?.name || ''}
                logo={skill?.image || ''}
                width={skill?.logoWidth || ''}
                link={skill?.link || ''}
              />
            </div>
          )
        })}
      </div>
      <svg
        id="lightning-grid"
        className="w-full h-full fixed left-0 top-0 z-[-1] m-0 pointer-events-none"
      />
    </>
  )
}

export default Skills
