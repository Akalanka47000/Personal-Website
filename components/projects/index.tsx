import { Carousel } from 'react-responsive-carousel'
import Project from './project'
import projects from './data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectCarousel = (): JSX.Element => {
  return (
    <>
      <div
        id="project-section"
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 mb-6 lg:mb-12 mt-0 lg:mt-8 cursor-default transition ease-in "
        data-aos="fade-right"
      >
        Projects
      </div>
      <div className="flex items-center justify-center flex-col mb-32 2xl:mb-12">
        <Carousel
          className="shadow-xl hover:shadow-2xl transition ease-in duration-200 w-full"
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          interval={4000}
          transitionTime={1000}
          infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
        >
          {projects?.map((project, index) => {
            return <Project key={index} project={project} />
          })}
        </Carousel>
      </div>
    </>
  )
}

export default ProjectCarousel
