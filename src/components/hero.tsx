import headshot from '../assets/fotografia.webp';
import SocialPill from './socialPill';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import githubIcon from '../assets/github.svg';
import emailIcon from '../assets/email.svg';

type socialMediaType = {
  name: string;
  icon: string;
  url: string;
};

const socialMedia = [
  { name: 'LinkedIn', icon: linkedinIcon, url: 'https://www.linkedin.com/in/ghurtadoa94/' },
  { name: 'Github', icon: githubIcon, url: 'https://github.com/ghurtadoarevalo' },
  { name: 'Contact Me', icon: emailIcon, url: 'mailto:ghurtadoarevalo.94@gmail.com' },
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 md:gap-10 md:flex-row mt-16 place-content-center" id="about">
      <div className="place-self-center mt-5 ">
        <img
          src={headshot}
          alt="Headshot"
          className="rounded-full outline-none outline-white w-36 sm:w-45 saturate-[0.8]"
        />
      </div>
      <div className="text-balance text-center md:text-left md:w-3/5">
        <h1 className="text-yellow-600  text-6xl font-medium font-sans">Hey, I&apos;m Gustavo</h1>
        <div className=" text-gray-200 mt-5 font-mono text-sm">
          +3 years experience.{' '}
          <span className="text-yellow-500 font-semibold">Software engineer & Master in computer science</span>.
          Santiago, Chile 🇨🇱.
          <p>Specialized in solving problems and delivering quality work.</p>
        </div>
        <div className="flex flex-row place-content-center gap-2 mt-8 md:place-content-start">
          {socialMedia.map((media: socialMediaType) => (
            <SocialPill key={media.name}>{media}</SocialPill>
          ))}
        </div>
      </div>
    </section>
  );
}
