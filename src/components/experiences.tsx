import vueIcon from '../assets/tech/vue-js-icon.svg'
import nodeIcon from '../assets/tech/node-js-icon.svg'
import azureIcon from '../assets/tech/azure-icon.svg'
import postgresqlIcon from '../assets/tech/postgresql-icon.svg'
import javaIcon from '../assets/tech/java-programming-language-icon.svg'

type TechIconKey = 'vuejs' | 'nodejs' | 'azure' | 'postgresql' | 'java'

const techIcons: Record<TechIconKey, string> = {
  vuejs: vueIcon,
  nodejs: nodeIcon,
  azure: azureIcon,
  postgresql: postgresqlIcon,
  java: javaIcon
}

const experiences: {
  time: string
  title: string
  info: string
  techs: TechIconKey[]
  place: string
}[] = [
  {
    time: 'dic. 2023 - actualidad',
    title: 'Desarrollador Full-stack',
    info: 'Encargado de desarrollar y mantener un sistema de pagos para tiendas del retail en Latinoamérica y el Caribe, utilizando microservicios en la nube de Azure. La plataforma facilita la integración y mejora el rendimiento al consolidar múltiples sistemas de medios de pago en uno solo.',
    techs: ['vuejs', 'nodejs', 'azure', 'postgresql'],
    place: 'Intcomex'
  },
  {
    time: 'dic. 2021 - sept. 2022',
    title: 'Desarrollador Backend',
    info: 'Desarrollo de sistema web para denuncias del departamento de Género de la Universidad de Santiago. Mi trabajo consistió en crear los cimientos del proyecto, contruyendo la base de datos y su modelo, así como luego desarrollar la lógica central del backend',
    techs: ['java', 'postgresql'],
    place: 'Universidad de Santiago'
  },
  {
    time: 'oct. 2019 - mar. 2021',
    title: 'Desarrollador Full-stack',
    info: 'Desarrollo de 3 sistemas utilizados por miles de estudiantes de la Universidad de Santiago de Chile durante la pandemia. Estos sistemas permiten corregir pruebas de diagnóstico, crear salas virtuales para la rendición de exámenes y entregar reportes individuales a los estudiantes. Actualmente, estos sistemas benefician a miles de estudiantes y ahorran cientos de horas de trabajo al año a la Vicerrectoría Académica de la universidad.',
    techs: ['vuejs', 'nodejs', 'azure', 'postgresql'],
    place: 'Vicerrectoría académica Universidad de Santiago'
  }
]

const calendarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-11 h-11"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    />
  </svg>
)

const circle = (
  <svg
    fill="none"
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 120 120"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="50" fill="rgb(234, 179, 8, 1)" />
  </svg>
)

export default function Experiences() {
  return (
    <section className="pt-20" id="experience">
      <div className="text-yellow-500 text-4xl font-thin font-sans flex mb-5 -ml-4 place-items-center ">
        {calendarIcon} <span className="ml-5 text-white">Experiencia</span>
      </div>
      {experiences.map((experience) => {
        return (
          <article
            className="grid p-6 pl-3 border-l-4 gap-5 border-white/50 font-thin sm:gap-0 sm:grid-cols-3"
            key={experience.time}
          >
            <div className="flex flex-col gap-2 pr-4">
              <div className="flex flex-row place-items-center">
                <span className="-ml-[22px]">{circle}</span>
                <p className="ml-5 flex place-self-center font-bold text-yellow-500 text-xl">
                  {experience.title}
                </p>
              </div>
              <span className="font-semibold text-white ml-4 text-balance">{experience.place}</span>
              <span className="font-mono text-white/60 text-xs ml-4">{experience.time}</span>
            </div>
            <div className="ml-4 text-pretty sm:ml-0 sm:col-span-2 ">
              <p className="mb-2 text-white lg:w-4/5  text-balance ">{experience.info}</p>
              <div className="flex gap-8 mt-5">
                {experience.techs?.map((tech: TechIconKey) => {
                  return (
                    <img
                      loading="lazy"
                      key={tech}
                      className="animate-pulse w-9 saturate-[0.8]"
                      src={techIcons[tech]}
                    ></img>
                  )
                })}
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
