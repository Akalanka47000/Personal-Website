interface cardProps {
  logo: string
  width: string
}

const SkillCard = ({ logo, width }: cardProps): JSX.Element => {
  const borderStyle =
    'border-gray-400 transform scale-110 absolute z-0'
  return (
    <div className="w-33vw h-33vw md:w-20vw md:h-20vw xl:w-14vw xl:h-14vw rounded-2xl relative transform hover:scale-105 transition ease-in ">
      <div className={`${borderStyle} border-t-4 top-0 left-0 h-full clipWidth`}></div>
      <div className={`${borderStyle} border-b-4 bottom-0 right-0 h-full clipWidth`}></div>
      <div className={`${borderStyle} border-l-4 bottom-0 w-full clipHeight`}></div>
      <div className={`${borderStyle} border-r-4 top-0 w-full clipHeight`}></div>
      <div className="w-full h-full bg-gray-dark border-orange-dark border absolute top-0 left-0 z-10 shadow-xl flex justify-center items-center ">
        <img
          src={`/portfolio/skills/${logo}.png`}
          alt="skill"
          style={{ width: `${width}` }}
        />
      </div>
    </div>
  )
}

export default SkillCard
