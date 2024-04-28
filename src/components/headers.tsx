import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa6'
import { IoCalendarOutline } from 'react-icons/io5'

const navigation = [
  { name: 'About', href: '#', icon: <CgProfile /> },
  { name: 'Experience', href: '#experience', icon: <IoCalendarOutline /> },
  { name: 'Portfolio', href: '#portfolio', icon: <FaCode /> },
  { name: 'Contact', href: '#', icon: <CgProfile /> }
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
          <button className="text-2xl z-30" onClick={() => setBurguerMenu(!burguerMenu)}>
            <CiMenuBurger />
          </button>
          {burguerMenu ? (
            <div className="flex flex-col fixed z-10 top-16 right-0 bg-black/90 w-1/2 h-[90vh] justify-evenly text-end rounded-l-3xl place-items-center transition-transform ease-in duration-300 ">
              {navigation.map((navigationItem) => (
                <div className="flex place-items-center" key={navigationItem.name}>
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
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
