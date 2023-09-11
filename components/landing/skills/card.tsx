import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { default as isEqual } from 'lodash/isEqual'
import { setHoveredCard } from '@/store/ui'

interface cardProps {
  index: number
  name: string
  logo: string
  width: string
  link: string
}

const SkillCard = ({ index, name, logo, width, link }: cardProps): JSX.Element => {
  const dispatch = useDispatch()

  const id = `skill-card-${index}`

  const onMouseEnter = () => {
    dispatch(setHoveredCard(id))
  }

  const onMouseLeave = () => {
    console.log('out')
    dispatch(setHoveredCard(null))
  }

  const borderStyle = 'border-gray-400 transform scale-110 absolute z-0'
  return (
    <a
      id={id}
      href={link}
      target="_blank"
      className="skill-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-[33vw] h-[33vw] md:w-[20vw] md:h-[20vw] xl:w-[14vw] xl:h-[14vw] rounded-2xl cursor-pointer filter contrast-[1.05] group relative transform hover:scale-105 transition ease-in">
        <div className={`${borderStyle} border-t-4 top-0 left-0 h-full clipWidth`} />
        <div className={`${borderStyle} border-b-4 bottom-0 right-0 h-full clipWidth`} />
        <div className={`${borderStyle} border-l-4 bottom-0 w-full clipHeight`} />
        <div className={`${borderStyle} border-r-4 top-0 w-full clipHeight`} />
        <div className="w-full h-full bg-gray-dark/70 border-primary border group-hover:border-3 absolute top-0 left-0 z-10 shadow-xl flex justify-center items-center ">
          <img src={`/skills/${logo}.png`} alt="skill" style={{ width: `${width}` }} />
        </div>
        <div className="w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-80 bg-gray-dark border-primary border-3 absolute bottom-0 left-0 z-10 flex justify-center items-center transition-all ease-out duration-500" />
        <div className="w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 z-10 flex justify-center items-center transition-all ease-out duration-500">
          <div className="text-white text-xl md:text-3xl text-center">{name}</div>
        </div>
      </div>
    </a>
  )
}

export default memo(SkillCard, (prevProps, currentProps) => isEqual(prevProps, currentProps))
