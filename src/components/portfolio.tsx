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
import portTesis1 from '../assets/portfolio/tesis1.webp'
import portTesis2 from '../assets/portfolio/tesis2.webp'
import portTesis3 from '../assets/portfolio/tesis3.webp'

import ImgSlider from './imgSlider'
import TechPill from './techPill'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

type TechIconKey =
  | 'vuejs'
  | 'nodejs'
  | 'azure'
  | 'postgresql'
  | 'java'
  | 'airflow'
  | 'python'
  | 'redshift'
  | 'pandas'

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
    name: '[Plataforma] Revisión evaluaciones de diagnóstico',
    info: 'Sistema web que permite la corrección de miles de pruebas de diagnóstico a nuevos estudiantes de la Universidad de Santiago de Chile cada año. Permite la corrección de pruebas de +4k estudiantes y +30 revisores simultáneos. Cuenta con roles de Administrador, Supervisor y Revisor, contando cada uno con su propio sistema.',
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
    name: '[Plataforma] Reportes evaluaciones de diagnóstico',
    info: 'Sistema web que permite distribuir reportes de evaluaciones de diagnóstico +4k de estudiantes por año. Cuenta con sistema de administración y otro de visualización de los reportes para los estudiantes.',
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
    name: '[ETL] Precios de Hogares en EEUU',
    info: 'Este proyecto utiliza la API de Realtor para obtener información detallada de propiedades inmobiliarias. Se emplea Apache Airflow para orquestar tareas de ETL, incluyendo la extracción, transformación y carga de datos en una base de datos AWS Redshift. Esto facilita el acceso y análisis de datos relevantes sobre propiedades inmobiliarias en un formato legible, contribuyendo a la creación de un data warehouse para almacenar información valiosa.',
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
    tech: ['python', 'airflow', 'redshift'],
    links: [
      {
        name: 'Github',
        icon: <FaGithub />,
        url: 'https://github.com/ghurtadoarevalo/EEUU-house-pricing'
      }
    ]
  },
  {
    id: 4,
    name: '[Investigación] Detección de ACV mediante complejidad y entropía Wavelet',
    info: 'Investigación en base a datos de sujetos que sufrieron un ACV de tipo isquémico (AIS) y leve. Esta investigación permite evaluar en base la complejidad si existen diferencias significativas entre sujetos sanos y pacientes AIS de gravedad leve a moderada, y entrega una primera iteración que en un futuro podría ser utilizado para elaborar una herramienta que permita detectar a personas con AIS, ya sean leves o graves.',
    imgs: [
      {
        url: portTesis1,
        aspectRatio: '1388/678'
      },
      {
        url: portTesis2,
        aspectRatio: '1388/678'
      },
      {
        url: portTesis3,
        aspectRatio: '1388/678'
      }
    ],
    url: 'mailto:ghurtadoarevalo.94@gmail.com',
    tech: ['python', 'pandas'],
    links: [
      {
        name: 'Preview',
        icon: <FaExternalLinkAlt />,
        url: 'https://www.linkedin.com/posts/ghurtadoa94_detecci%C3%B3n-de-acv-mediante-entrop%C3%ADa-y-complejidad-activity-7058954537360838656-qW2B/?utm_source=share&utm_medium=member_desktop'
      }
    ]
  }
]

const Portfolio = () => {
  return (
    <section className="pt-10" id="portfolio">
      <div className="text-white text-4xl font-thin font-sans flex mb-5 -ml-4">
        <img src={codeIcon} alt="" /> <h2 className="ml-5">Proyectos</h2>
      </div>
      {portfolioData.map((data: portfolioType, index) => (
        <article
          className="flex flex-col mb-5 md:grid md:grid-cols-2 md:mt- shadow-white/2 shadow-xl rounded-3xl"
          key={index}
        >
          <ImgSlider>{data.imgs}</ImgSlider>
          <div className="flex flex-col mt-8 md:mt-0 md:place-items-start md:ml-5 px-5 pt-5 pb-2">
            <h3 className="text-white text-center text-2xl md:text-left pt-5">{data.name}</h3>
            <div className="flex flex-row place-content-center gap-3 mt-2">
              {data.tech.map((techName: TechIconKey, index) => (
                <TechPill tech={techName} key={index}></TechPill>
              ))}
            </div>
            <p className="text-white/50 text-balance p-5 text-center md:text-left md:px-0">
              {data.info}
            </p>
            <div className="mt-2 place-self-center flex flex-row gap-5">
              {data.links?.map((link, index) => <SocialPill key={index}>{link}</SocialPill>)}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Portfolio
