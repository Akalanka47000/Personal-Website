import { useEffect, useState } from 'react'
import { DiGithubAlt } from 'react-icons/di'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Link } from 'react-scroll'
import NavbarLogo from './logo'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    toggleNav()
    document.addEventListener('scroll', () => {
      if (process.browser) {
        const navbar = document.getElementById('mobile-nav') as HTMLElement
        navbar.style.opacity = '0%'
        navbar.style.transform = 'translateY(-100vh)'
        setIsOpen(false)
      }
    })
  }, [])

  const toggleNav = () => {
    if (process.browser) {
      const navbar = document.getElementById('mobile-nav') as HTMLElement
      if (!isOpen) {
        navbar.style.opacity = '100%'
        navbar.style.transform = 'translateY(0px)'
      } else {
        navbar.style.opacity = '0%'
        navbar.style.transform = 'translateY(-100vh)'
      }
    }
    setIsOpen(!isOpen)
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
      path: '/resume.pdf',
      download: "Akalanka Perera's Resume",
    },
  ]

  const menuItemList = (mobile: boolean = false) => {
    return menuItems?.map((menuItem, index) => {
      return (
        <div
          key={index}
          className={`${
            mobile
              ? `flex lg:hidden text-white text-lg my-2`
              : `hidden lg:flex ${index == 0 ? 'text-primary text-xl' : 'text-white text-lg'}`
          } hover:text-primary font-medium mx-3 cursor-pointer transition ease-in`}
        >
          {menuItem.download ? (
            <a href={menuItem.path} download={menuItem.download}>
              {menuItem.name}
            </a>
          ) : (
            <Link to={menuItem.path} spy={true} smooth={true} onClick={mobile ? toggleNav : () => {}}>
              {menuItem.name}
            </Link>
          )}
        </div>
      )
    })
  }

  return (
    <header
      id="about-section"
      className="flex flex-row w-full h-[4.25rem] justify-between items-center shadow-red z-20 bg-black-see-through transition duration-500 ease"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="w-11 h-11 ml-4 flex items-center">
            <NavbarLogo />
          </div>
          <div className="font-medium text-xl text-white hover:text-primary ml-4 cursor-default transition ease-in">
            Programmer&apos;s Log
          </div>
        </div>

        <nav className="absolute right-5">
          <ul className="flex items-center ">
            {menuItemList()}
            <a href="https://github.com/Akalanka47000/akalanka47000.github.io" target="_blank">
              <DiGithubAlt
                size={35}
                className="fill-current-color text-white hover:text-primary transition ease-in ml-2"
              />
            </a>

            <li className="block lg:hidden z-20 cursor-pointer transition ease-in" onClick={toggleNav}>
              <HiMenuAlt2 className="h-8 w-8 ml-3 text-white hover:text-primary transition ease-in" />
              <div
                id="mobile-nav"
                className="fixed top-16 right-0 flex flex-col bg-black-normal px-4 py-4 rounded-sm transition duration-300 ease"
              >
                {menuItemList(true)}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
