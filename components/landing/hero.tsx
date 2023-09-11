import { BiDumbbell } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'

const Hero = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <img
          src="/home/self.png"
          alt=""
          className="opacity-80 pointer-events-none h-auto w-11/12 sm:w-8/12 lg:w-[48%] mt-auto filter contrast-[1.15]"
        />
        <div className="flex flex-col justify-center items-end lg:items-start text-right lg:text-left mt-20 mb-12 lg:mt-0 lg:mb-0 mx-12 md:mx-32">
          <div className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white cursor-default transition ease-in">
            Hi, I&apos;m <span className="text-primary blink">Akalanka Perera</span>
          </div>
          <div className="font-bold text-xl xl:text-2xl 2xl:text-3xl text-white hover:text-primary mt-6 cursor-default transition ease-in">
            I&apos;m a {Math.floor((Date.now() - new Date('2002-06-06T18:00:00.000Z').getTime()) / 31536000000)} year
            old full-stack engineer from Sri Lanka
          </div>
          <div className="font-bold text-xl xl:text-2xl 2xl:text-3xl text-white hover:text-primary mt-6 cursor-default transition ease-in">
            Right now I&apos;m probably doing what I do best
          </div>
          <div className="font-bold text-xl xl:text-2xl 2xl:text-3xl text-white hover:text-primary mt-6 cursor-default transition ease-in">
            My hobbies include
          </div>
          <div className="flex row justify-center items-center mt-8">
            <FaLaptopCode className="h-10 w-10 md:h-11 md:w-11 xl:h-12 xl:w-12 fill-current-color text-white hover:text-primary transition ease-in  " />

            <IoGameController className="h-10 w-10 md:h-11 md:w-11 xl:h-13 xl:w-13 fill-current-color text-white hover:text-primary transition ease-in ml-7 mx-6" />

            <BiDumbbell className="h-13 w-13 md:h-14 md:w-14 xl:h-16 xl:w-16 fill-current-color text-white hover:text-primary transition ease-in" />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-primary shadow-red-thicker"></div>
    </>
  )
}

export default Hero
