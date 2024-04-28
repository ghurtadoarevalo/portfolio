import SocialPill from './socialPill'

import codeIcon from '../assets/code-icon.svg'
import portEvaluacion1 from '../assets/portfolio/evaluacion1.webp'
import portEvaluacion2 from '../assets/portfolio/evaluacion2.webp'
import portEvaluacion3 from '../assets/portfolio/evaluacion3.webp'
import portEvaluacion4 from '../assets/portfolio/evaluacion4.webp'
import portReportes1 from '../assets/portfolio/reportes1.webp'
import portReportes2 from '../assets/portfolio/reportes2.webp'
import portReportes3 from '../assets/portfolio/reportes3.webp'
import portReportes4 from '../assets/portfolio/reportes4.webp'
import portReportes5 from '../assets/portfolio/reportes5.webp'
import portEtl1 from '../assets/portfolio/etl1.webp'
import portEtl2 from '../assets/portfolio/etl2.webp'
import portEtl3 from '../assets/portfolio/etl3.webp'
import ImgSlider from './imgSlider'
import TechPill from './techPill'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { SiMinutemailer } from 'react-icons/si'

type TechIconKey = 'vuejs' | 'nodejs' | 'azure' | 'postgresql' | 'java'

interface portfolioType {
  id: number
  name: string
  info: string
  imgs: imgsType[]
  url: string
  tech: TechIconKey[]
  links: socialMediaType[] | null
}

interface socialMediaType {
  name: string
  icon: ReactElement<IconType>
  url: string
}

interface imgsType {
  url: string
  aspectRatio: string
}

const portfolioData: portfolioType[] = [
  {
    id: 1,
    name: 'Diagnostic Test Revision Platform',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: portEvaluacion1,
        aspectRatio: '1388/678'
      },
      {
        url: portEvaluacion2,
        aspectRatio: '1388/678'
      },
      {
        url: portEvaluacion3,
        aspectRatio: '1388/678'
      },
      {
        url: portEvaluacion4,
        aspectRatio: '1388/678'
      }
    ],
    url: 'https://www.linkedin.com/in/ghurtadoa94/',
    tech: ['vuejs', 'nodejs', 'postgresql'],
    links: null
  },
  {
    id: 2,
    name: 'Diagnostic Test Reports Platform',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: portReportes1,
        aspectRatio: '1388/678'
      },
      {
        url: portReportes2,
        aspectRatio: '1388/678'
      },
      {
        url: portReportes3,
        aspectRatio: '1388/678'
      },
      {
        url: portReportes4,
        aspectRatio: '1388/678'
      },
      {
        url: portReportes5,
        aspectRatio: '1388/678'
      }
    ],
    url: 'https://github.com/ghurtadoarevalo',
    tech: ['vuejs', 'nodejs', 'postgresql'],
    links: null
  },
  {
    id: 3,
    name: 'EEUU House Pricing ETL',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: portEtl1,
        aspectRatio: '1388/678'
      },
      {
        url: portEtl2,
        aspectRatio: '1388/678'
      },
      {
        url: portEtl3,
        aspectRatio: '1388/678'
      }
    ],
    url: 'mailto:ghurtadoarevalo.94@gmail.com',
    tech: ['vuejs'],
    links: [
      { name: 'Github', icon: <FaGithub />, url: 'https://github.com/ghurtadoarevalo' },
      { name: 'Github', icon: <FaGithub />, url: 'https://github.com/ghurtadoarevalo' }
    ]
  }
]

const Portfolio = () => {
  return (
    <section className="pt-10" id="portfolio">
      <div className="text-white text-4xl font-thin font-sans flex mb-5 -ml-4">
        <img src={codeIcon} alt="" /> <h2 className="ml-5">Portfolio</h2>
      </div>
      {portfolioData.map((data: portfolioType, index) => (
        <article
          className="flex flex-col mb-5 md:grid md:grid-cols-2 md:mt- shadow-white/2 shadow-xl rounded-3xl"
          key={index}
        >
          <ImgSlider>{data.imgs}</ImgSlider>
          <div className="flex flex-col mt-8 md:mt-0 md:place-items-start md:ml-5 p-5 pt-0">
            <h3 className="text-white text-center text-2xl md:text-left">{data.name}</h3>
            <div className="flex flex-row place-content-center gap-3 mt-2">
              {data.tech.map((techName: TechIconKey, index) => (
                <TechPill tech={techName} key={index}></TechPill>
              ))}
            </div>
            <p className="text-white/50 text-balance p-5 text-center md:text-left md:px-0">
              {data.info}
            </p>
            <div className="mt-8 place-self-center flex flex-row gap-5">
              {data.links?.map((link, index) => <SocialPill key={index}>{link}</SocialPill>)}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Portfolio
