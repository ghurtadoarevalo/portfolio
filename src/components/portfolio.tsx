import codeIcon from '../assets/code-icon.svg'
import testImg from '../assets/test1.jpg'
import test2Img from '../assets/test2.jpg'
import vueIcon from '../assets/vue-js-icon.svg'
import nodeIcon from '../assets/node-js-icon.svg'
import azureIcon from '../assets/azure-icon.svg'
import postgresqlIcon from '../assets/postgresql-icon.svg'
import javaIcon from '../assets/java-programming-language-icon.svg'



type TechIconKey = 'vuejs' | 'nodejs' | 'azure' | 'postgresql' | 'java';

type portfolioType = {
	name: string,
	info: string,
	img: string,
	url: string
	tech: TechIconKey[]
}

const techIcons: Record<TechIconKey, string> = {
	'vuejs': vueIcon,
	'nodejs': nodeIcon,
	'azure': azureIcon,
	'postgresql': postgresqlIcon,
	'java': javaIcon
}


const portfolioData: Array<portfolioType> = [
	{
		name: 'LinkedIn',
		info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
		img: testImg,
		url: 'https://www.linkedin.com/in/ghurtadoa94/',
		tech: ['vuejs', 'azure']
	},
	{
		name: 'Github',
		info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
		img: test2Img,
		url: 'https://github.com/ghurtadoarevalo',
		tech: ['vuejs']
	},
	{
		name: 'Contact Me',
		info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
		img: testImg,
		url: 'mailto:ghurtadoarevalo.94@gmail.com',
		tech: ['vuejs']
	}
]

const Portfolio = () => (
	<section className="pt-10" id='portfolio'>
		<div className="text-white text-4xl font-thin font-sans flex mb-5 -ml-4"> <img src={codeIcon} alt="" /> <span className="ml-5">Portfolio</span> </div>
		{portfolioData.map((data: portfolioType) => (
			<article className='flex flex-col mb-5 md:grid md:grid-cols-2 md:mt- shadow-white/5 shadow-2xl rounded-3xl overflow-hidden'>
				<img src={data.img} alt="" className='aspect-[126/84] rounded-3xl' />
				<div className='flex flex-col mt-5 md:place-items-start md:ml-5 p-5'>
					<p className='text-white text-center text-3xl font-mono md:text-left'>{data.name}</p>
					<div className='flex flex-row place-content-center gap-3 mt-2'>
						{data.tech.map((tech: TechIconKey) => (
							<button className='flex flex-row gap-2 bg-black px-3 py-1 rounded-full place-items-center'>
								<img className='w-3' src={techIcons[tech]} alt="" />
								<p className='text-white text-xs'>aaa</p>
							</button>
						))}
					</div>
					<p className='text-white/50 text-balance p-5 text-center md:text-left md:px-0'>{data.info}</p>

				</div>
			</article>
		))}
	</section>
)


export default Portfolio