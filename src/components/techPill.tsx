import React, { ReactElement } from 'react'

import { FaVuejs, FaNodeJs } from 'react-icons/fa'
import { SiMicrosoftazure, SiPostgresql } from 'react-icons/si'

import { IconType } from 'react-icons'

type TechIconKey = 'vuejs' | 'nodejs' | 'azure' | 'postgresql' | 'java'

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
    {techIcons[tech]?.icon}
    <p className="text-white text-xs">{tech}</p>
  </button>
)

export default TechPill
