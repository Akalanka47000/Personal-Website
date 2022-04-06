import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Project from './project'

const projects: any[] = [
  {
    name: 'Curfox DMS',
    description:
      'Software for courier companies to build manage and grow their network',
    toolsUsed: ['Laravel', 'Vue.js', 'Flutter', 'Docusaurus', 'Github Actions'],
    link: 'https://curfox.com',
  },
  {
    name: 'LetMeKnow',
    description:
      'Mobile application and Web portal for the healthcare industry. A portable and cost-efficient solution where consultants would be able to stream the patient vital signs in real time regardless of their location, which helps them to understand their patients and prioritize their visits to the clinics / hospitals',
    toolsUsed: ['Flutter', 'Angular', 'Node.js', 'AWS'],
  },
  {
    name: 'QickTeam',
    description:
      'A platform for individuals of similar interests to attend the same activity together and create great experiences. Users can use the app to alert others of his activity / game or event. The other users interested in being at the event/game will then indicate their availability. As soon as this phase is completed, the individuals can then meet up and enjoy the moment',
    toolsUsed: ['Flutter', 'Node.js', 'AWS'],
  },
  {
    name: 'Covid-Alert',
    description:
      'Web portal and Mobile Application for marking and tracking Covid-19 patients with a real time notification and tracking system. Built for a mini-hackathon at university',
    toolsUsed: ['Flutter', 'Angular', 'Node.js', 'AWS'],
    link: 'https://github.com/Akalanka47000/Covid-alert',
  },
  {
    name: 'FCM-Server',
    description:
      'An open source Node.js based server with a single endpoint to broadcast a message to a given set of devices',
    toolsUsed: ['Flutter', 'Firebase'],
    link: 'https://github.com/Akalanka47000/FCM-Server',
  },
  {
    name: 'Google Maps Replica',
    description:
      'Mobile application to show directions to a particular destination with automated distance alerts between time intervals',
    toolsUsed: ['Flutter', 'GCP'],
  },
  {
    name: 'AI-Motion',
    description:
      'Desktop prototype and mobile application that uses machine learning to estimate poses and teach people to dance. It interactively increases user engagement and allows the user to also have fun while learning through the application. Project is still a work in progress',
    toolsUsed: ['Flutter', 'Firebase'],
  },
]

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
      <div
        className="flex items-center justify-center flex-col mb-32 2xl:mb-12"
      >
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
