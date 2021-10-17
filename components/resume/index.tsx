import ResumeButton from "./button"

const Resume = (): JSX.Element => {
  return (
    <div
      id="resume-section"
      className="w-full flex justify-center items-center mb-24"
    >
      <ResumeButton text='Download a copy of my Resume' extraClasses='hidden md:flex py-6'/>
      <ResumeButton text='Download Resume' extraClasses='flex md:hidden py-4'/>
    </div>
  )
}

export default Resume
