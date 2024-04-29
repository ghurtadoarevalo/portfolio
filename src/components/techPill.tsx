import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { FaVuejs, FaNodeJs } from 'react-icons/fa'
import {
  SiMicrosoftazure,
  SiPostgresql,
  SiApacheairflow,
  SiAmazonredshift,
  SiGeopandas
} from 'react-icons/si'
import { FaPython } from 'react-icons/fa6'

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

interface TechIcon {
  icon: ReactElement<IconType>
  background: string
  backgroundHover: string
}

const techIcons: Record<TechIconKey, TechIcon | undefined> = {
  vuejs: {
    icon: <FaVuejs />,
    background: 'bg-[#06b47c]/40',
    backgroundHover: 'hover:bg-[#06b47c]/80'
  },
  nodejs: {
    icon: <FaNodeJs />,
    background: 'bg-green-700/40',
    backgroundHover: 'hover:bg-green-700/80'
  },
  azure: {
    icon: <SiMicrosoftazure />,
    background: 'bg-[#008ad7]/40',
    backgroundHover: 'hover:bg-[#008ad7]/80'
  },
  postgresql: {
    icon: <SiPostgresql />,
    background: 'bg-[#0259a6]/40',
    backgroundHover: 'hover:bg-[#0259a6]/80'
  },
  airflow: {
    icon: <SiApacheairflow />,
    background: 'bg-[#e53f28]/40',
    backgroundHover: 'hover:bg-[#e53f28]/80'
  },
  python: {
    icon: <FaPython />,
    background: 'bg-[#ffe05a]/40',
    backgroundHover: 'hover:bg-[#ffe05a]/80'
  },
  redshift: {
    icon: <SiAmazonredshift />,
    background: 'bg-[#2369ae]/40',
    backgroundHover: 'hover:bg-[#2369ae]/80'
  },
  pandas: {
    icon: <SiGeopandas />,
    background: 'bg-[#130856]/40',
    backgroundHover: 'hover:bg-[#130856]/80'
  },
  java: undefined
}

interface TechPillProps {
  tech: TechIconKey
  key: number
}

const TechPill: React.FC<TechPillProps> = ({ tech, key }) => (
  <button
    className={`flex flex-row gap-2 px-3 py-1 rounded-full place-items-center ${techIcons[tech]?.backgroundHover} ${techIcons[tech]?.background} text-white/70`}
    key={key}
  >
    <span className="text-xl"> {techIcons[tech]?.icon}</span>
    <p className="text-white text-xs">{tech}</p>
  </button>
)

export default TechPill
