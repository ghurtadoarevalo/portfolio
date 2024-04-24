import codeIcon from '../assets/code-icon.svg';
import test2Img from '../assets/test2.webp';
import test3Img from '../assets/test3.webp';
import portEvaluacion1 from '../assets/portfolio/evaluacion1.webp';
import portEvaluacion2 from '../assets/portfolio/evaluacion2.webp';
import portEvaluacion3 from '../assets/portfolio/evaluacion3.webp';
import portEvaluacion4 from '../assets/portfolio/evaluacion4.webp';
import vueIcon from '../assets/vue-js-icon.svg';
import nodeIcon from '../assets/node-js-icon.svg';
import azureIcon from '../assets/azure-icon.svg';
import postgresqlIcon from '../assets/postgresql-icon.svg';
import javaIcon from '../assets/java-programming-language-icon.svg';
import ImgSlider from './imgSlider';

type TechIconKey = 'vuejs' | 'nodejs' | 'azure' | 'postgresql' | 'java';

type portfolioType = {
  id: number;
  name: string;
  info: string;
  imgs: imgsType[];
  url: string;
  tech: TechIconKey[];
};

type imgsType = {
  url: string;
  aspectRatio: string;
};

const techIcons: Record<TechIconKey, string> = {
  vuejs: vueIcon,
  nodejs: nodeIcon,
  azure: azureIcon,
  postgresql: postgresqlIcon,
  java: javaIcon,
};

const portfolioData: Array<portfolioType> = [
  {
    id: 1,
    name: 'Diagnostic Test Revision Platform',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: portEvaluacion1,
        aspectRatio: '1388/678',
      },
      {
        url: portEvaluacion2,
        aspectRatio: '1388/678',
      },
      {
        url: portEvaluacion3,
        aspectRatio: '1388/678',
      },
      {
        url: portEvaluacion4,
        aspectRatio: '1388/678',
      },
    ],
    url: 'https://www.linkedin.com/in/ghurtadoa94/',
    tech: ['vuejs', 'azure'],
  },
  {
    id: 2,
    name: 'Github',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: test3Img,
        aspectRatio: '1388/925',
      },
      {
        url: test2Img,
        aspectRatio: '1388/925',
      },
    ],
    url: 'https://github.com/ghurtadoarevalo',
    tech: ['vuejs'],
  },
  {
    id: 3,
    name: 'Contact Me',
    info: 'Creation and development of a payment system for stores throughout Latin America and the Caribbean, which allows the migration of dozens of payment systems to a single platform of easy integration and high performance, using microservices in the Azure cloud.',
    imgs: [
      {
        url: test2Img,
        aspectRatio: '126/84',
      },
    ],
    url: 'mailto:ghurtadoarevalo.94@gmail.com',
    tech: ['vuejs'],
  },
];

const Portfolio = () => {
  return (
    <section className="pt-10" id="portfolio">
      <div className="text-white text-4xl font-thin font-sans flex mb-5 -ml-4">
        {' '}
        <img src={codeIcon} alt="" /> <h2 className="ml-5">Portfolio</h2>{' '}
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
              {data.tech.map((tech: TechIconKey, index) => (
                <button
                  className="flex flex-row gap-2 bg-white/20 px-3 py-1 rounded-full place-items-center hover:bg-white/40"
                  key={index}
                >
                  <img className="w-3" src={techIcons[tech]} alt="" />
                  <p className="text-white text-xs">{tech}</p>
                </button>
              ))}
            </div>
            <p className="text-white/50 text-balance p-5 text-center md:text-left md:px-0">{data.info}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
