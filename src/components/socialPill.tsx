
type socialMediaType = {
	name: string,
	icon: string,
	url: string
}

type childrenProp = {
	children: socialMediaType
}

const SocialPill = ({children}: childrenProp) => (
			<a target='_blank' href={children.url} className='flex px-3 py-1 bg-gray-500/20 rounded-full place-content-center' key={children.name}>
				<img className='w-9' title={children.name} src={children.icon} alt={children.name} />
				<span className='hidden text-white font-thin text-sm ml-1 text-center place-content-center lg:block'>{children.name}</span>
			</a>
)

export default SocialPill

