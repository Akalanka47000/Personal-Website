import { useState } from 'react'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'
import { DiGithubAlt } from 'react-icons/di'
import NavbarLogo from './logo'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedNavIndex, setSelectedNavIndex] = useState(0)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  const menuItems = [
    {
      name: 'About',
      path: '/',
    },
    {
      name: 'Skills',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/',
    },
    {
      name: 'Achivements',
      path: '/',
    },
  ]

  return (
    <header className="flex flex-row w-full h-16 justify-between items-center shadow-red hover:shadow-red-thicker z-20 bg-black-see-through transition duration-500 ease">
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
            {menuItems.map((menuItem, index) => {
              return (
                <div
                  key={index}
                  className={`hidden lg:flex font-medium text-lg ${
                    selectedNavIndex == index
                      ? 'text-orange-dark'
                      : 'text-white'
                  } hover:text-orange-dark transition ease-in mx-3`}
                  onClick={setSelectedNavIndex.bind(this, index)}
                >
                  <Link href={menuItem.path}>
                    <a>{menuItem.name}</a>
                  </Link>
                </div>
              )
            })}
            <Link href="https://github.com/Akalanka47000/Personal-Website">
              <a target="_blank">
                <DiGithubAlt size={35} className="fill-current-color text-white hover:text-orange-dark transition ease-in ml-2"/>
              </a>
            </Link>
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
