import headshot from '../assets/fotografia.webp'
import SocialPill from './socialPill'
import { ReactElement } from 'react'
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

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 md:gap-10 md:flex-row mt-16 place-content-center">
      <div className="place-self-center mt-5 z-0">
        <img
          src={headshot}
          alt="Headshot"
          className="rounded-full outline-none outline-white w-36 sm:w-45 saturate-[0.8]"
        />
      </div>
      <div className="text-balance text-center md:text-left md:w-3/5">
        <h1 className="text-yellow-600  text-6xl font-medium font-sans">Hey, soy Gustavo</h1>
        <div className=" text-gray-200 mt-5 font-mono text-sm">
          +3 años de experiencia.{' '}
          <span className="text-yellow-500 font-semibold">
            Ingeniero de software & Magister en ingeniería informática
          </span>
          . Santiago, Chile 🇨🇱.
          <p>Especializado en resolver problemas y realizar un trabajo de calidad.</p>
          <p className="text-yellow-500 font-mono mt-2">
            {'< '}B1 english Certificate{' >'}
          </p>
        </div>
        <div className="flex flex-row place-content-center gap-2 mt-6 md:place-content-start">
          {socialMedia.map((media: socialMediaType) => (
            <SocialPill key={media.name}>{media}</SocialPill>
          ))}
        </div>
      </div>
    </section>
  )
}
