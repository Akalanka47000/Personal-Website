import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Project from './project'

const projects: any[] = [
  {
    name: 'LetMeKnow',
    description:
      'Mobile application and Web portal for the healthcare industry. A portable and cost-efficient solution where consultants would be able to stream the patient vital signs in real time regardless of their location, which helps them to understand their patients and priorities their visits to the clinics / hospital',
    toolsUsed: ['Flutter', 'Angular', 'Node.js', 'AWS'],
  },
  {
    name: 'QickTeam',
    description:
      'A platform for individuals of similar interests to attend the same activity together and create great experiences. Users can use the app to alert others of his activity/games or event. The other users interested in being at the event/game will then indicate their availability. As soon as this phase is completed, the individuals can then meet up and enjoy the moment',
    toolsUsed: ['Flutter', 'Node.js', 'AWS'],
  },
  {
    name: 'Covid-Alert',
    description:
      'Web portal and Mobile Application for marking and tracking Covid-19 patients with a real time notification and tracking system. Built for a mini-hackathon at university',
    toolsUsed: ['Flutter', 'Angular', 'Node.js', 'AWS'],
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
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 mb-6 lg:mb-12 cursor-default transition ease-in "
        data-aos="fade-right"
      >
        Projects
      </div>
      <div
        data-aos="fade-left"
        className="flex items-center justify-center flex-col mb-12"
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
