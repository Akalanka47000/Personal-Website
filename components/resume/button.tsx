interface props {
  text: string
  extraClasses: string
}

const ResumeButton = ({ text, extraClasses }: props): JSX.Element => {
  return (
    <a
      href="/resume.pdf"
      download
      className={`opacity-90 px-10 py-4 mx-6 bg-primary text-lg lg:text-xl text-white text-center rounded-md transform filter hover:brightness-125 hover:scale-105 transition ease duration-500 ${extraClasses}`}
    >
      {text}
    </a>
  )
}

export default ResumeButton
