import { useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt2 } from 'react-icons/hi'
import { DiGithubAlt } from 'react-icons/di'
import NavbarLogo from './logo'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  const menuItems = [
    {
      name: 'About',
      path: 'about-section',
    },
    {
      name: 'Skills',
      path: 'skill-section',
    },
    {
      name: 'Projects',
      path: 'project-section',
    },
    {
      name: 'Achievements',
      path: 'achievement-section',
    },
    {
      name: 'Resume',
      path: 'resume-section',
    },
  ]

  return (
    <header
      id="about-section"
      className="flex flex-row w-full h-16 justify-between items-center shadow-red hover:shadow-red-thicker z-20 bg-black-see-through transition duration-500 ease"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="w-11 h-11 ml-4 flex items-center">
            <Link href="/">
              <a>
                <NavbarLogo />
              </a>
            </Link>
          </div>
          <div className="font-medium text-xl text-white hover:text-orange-dark ml-4 cursor-default transition ease-in">
            Portfolio
          </div>
        </div>

        <nav className="absolute right-5">
          <ul className="flex items-center ">
            {menuItems?.map((menuItem, index) => {
              return (
                <div
                  key={index}
                  className={`hidden lg:flex font-medium  ${
                    index == 0
                      ? 'text-orange-dark text-xl'
                      : 'text-white text-lg'
                  } hover:text-orange-dark cursor-pointer transition ease-in mx-3`}
                >
                  <Link
                    to={menuItem.path}
                    spy={true}
                    smooth={true}
                  >
                    {menuItem.name}
                  </Link>
                </div>
              )
            })}

            <a
              href="https://github.com/Akalanka47000/Personal-Website"
              target="_blank" 
            >
              <DiGithubAlt
                size={35}
                className="fill-current-color text-white hover:text-orange-dark transition ease-in ml-2"
              />
            </a>

            <li
              className="block lg:hidden z-20 cursor-pointer transition ease-in"
              onClick={toggleNav}
            >
              {!isOpen ? (
                <HiMenuAlt2 className="h-8 w-8 ml-3 text-white hover:text-orange-dark transition ease-in" />
              ) : (
                ''
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
