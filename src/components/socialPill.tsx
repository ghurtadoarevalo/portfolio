import { ReactElement } from 'react'
import { IconType } from 'react-icons'

interface socialMediaType {
  name: string
  icon: ReactElement<IconType>
  url: string
}

const SocialPill = ({ children }: { children: socialMediaType }) => (
  <a
    target="_blank"
    href={children.url}
    className="flex px-3 py-2 bg-gray-500/20 rounded-full place-items-center hover:bg-gray-500/40 gap-1"
    key={children.name}
    rel="noreferrer"
  >
    <span className="text-2xl text-white">{children.icon}</span>
    <span className="hidden text-white font-thin text-sm ml-1 text-center place-content-center lg:block">
      {children.name}
    </span>
  </a>
)

export default SocialPill
