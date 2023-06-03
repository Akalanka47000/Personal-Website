interface props {
  project: any
}
const Project = ({ project }: props): JSX.Element => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center px-8 lg:px-0">
      <a
        href={project.link}
        target="_blank"
        className={`w-10/12 sm:w-3/4 xl:w-7/12 2xl:5/12 h-full ml-0 lg:ml-20 mb-6 lg:mb-0 p-4 2xl:p-32 ${
          project.link ? 'cursor-pointer' : ''
        }`}
        data-aos="fade-right"
      >
        <img src={`/projects/${project.name}.png`} alt="project-image" className={` `} />
      </a>
      <div className="w-1 h-80 bg-primary shadow-red-thicker hidden md:flex mr-14 lg:mr-20" data-aos="fade"></div>
      <div
        className="w-full flex flex-col justify-center items-center lg:items-start ml-0 xl:ml-28 mr-0 lg:mr-20"
        data-aos="fade-left"
      >
        <div className="font-bold text-4xl text-center lg:text-left text-primary cursor-default transition ease-in">
          {project.name}
        </div>
        <div className="font-medium text-lg md:text-xl xl:text-2xl text-white text-center lg:text-left mt-6 cursor-default transition ease-in">
          {project.description}
        </div>
        <div className="w-full flex flex-row flex-wrap gap-x-4 justify-center md:justify-start items-center">
          {project.toolsUsed?.map((tool: string, index: number) => {
            return (
              <div
                key={index}
                className={`bg-gray-700 hover:bg-primary py-2 px-8 mt-8 text-white text-lg cursor-default rounded-md transform hover:scale-105 transition ease-in`}
              >
                {tool}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
