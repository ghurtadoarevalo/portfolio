import SocialPill from './socialPill'

import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa6'
import { IoCalendarOutline } from 'react-icons/io5'
import { IconType } from 'react-icons'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
interface socialMediaType {
  name: string
  icon: ReactElement<IconType>
  url: string
}

const socialMedia = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ghurtadoa94/' },
  { name: 'Github', icon: <FaGithub />, url: 'https://github.com/ghurtadoarevalo' },
  {
    name: 'ghurtadoarevalo.94@gmail.com',
    icon: <SiMinutemailer />,
    url: 'mailto:ghurtadoarevalo.94@gmail.com'
  }
]

const navigation = [
  { name: 'Experiencia', href: '#experience', icon: <IoCalendarOutline /> },
  { name: 'Portafolio', href: '#portfolio', icon: <FaCode /> },
  { name: 'Sobre Mí', href: '#about', icon: <CgProfile /> }
]

function linkRouteClassName(routeName: string, currentRoute: string) {
  return currentRoute === routeName ? 'text-gray-300 pl-4' : 'text-gray-500 pl-4'
}

function pressRouteMenu(
  setCurrentRoute: Dispatch<SetStateAction<string>>,
  routeName: string,
  setBurguerMenu: Dispatch<SetStateAction<boolean>>
) {
  setCurrentRoute(routeName)
  setTimeout(() => {
    setBurguerMenu(false)
  }, 1000)
}

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState('About')
  const [burguerMenu, setBurguerMenu] = useState(false)

  return (
    <header className="mt-5">
      <nav className="flex flex-row place-items-center justify-between sm:justify-evenly">
        <div className="font-thin justify-start">
          <span className="text-white text-xl">gHurtado</span>
          <span className="text-yellow-600 text-xl">_dev</span>
        </div>

        <div className="hidden sm:flex">
          {navigation.map((navigationItem) => (
            <a
              key={navigationItem.name}
              className={linkRouteClassName(navigationItem.name, currentRoute)}
              href={navigationItem.href}
              onClick={() => setCurrentRoute(navigationItem.name)}
            >
              {navigationItem.name}
            </a>
          ))}
        </div>

        <div className="sm:hidden overflow-hidden right-5 fixed text-white z-20">
          <button className="text-2xl" onClick={() => setBurguerMenu(!burguerMenu)}>
            <CiMenuBurger />
          </button>
          {burguerMenu ? (
            <div className="flex flex-col fixed top-16 right-0 bg-black/75 w-1/2 h-[90vh] pt-20 pb-10 justify-between text-end rounded-l-3xl place-items-center transition-transform ease-in duration-300">
              {navigation.map((navigationItem) => (
                <div className="flex place-items-center " key={navigationItem.name}>
                  <span className="text-yellow-600 text-3xl">{navigationItem.icon}</span>
                  <a
                    className={linkRouteClassName(navigationItem.name, currentRoute) + ' text-xl'}
                    href={navigationItem.href}
                    onClick={() =>
                      pressRouteMenu(setCurrentRoute, navigationItem.name, setBurguerMenu)
                    }
                  >
                    {navigationItem.name}
                  </a>
                </div>
              ))}
              <div className="flex flex-row place-content-center gap-2 mt-6 md:place-content-start">
                {socialMedia.map((media: socialMediaType) => (
                  <SocialPill key={media.name}>{media}</SocialPill>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
