import ResumeButton from './button'

const Resume = (): JSX.Element => {
  return (
    <div id="resume-section" className="w-full flex justify-center items-center mb-24" data-aos="fade-right">
      <ResumeButton text="Download a copy of my resume" extraClasses="hidden md:flex py-5" />
      <ResumeButton text="Download Resume" extraClasses="flex md:hidden py-4" />
    </div>
  )
}

export default Resume
