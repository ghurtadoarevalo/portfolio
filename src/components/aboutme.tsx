import { FaUserPlus } from 'react-icons/fa'

const AboutMe = () => (
  <aside className="mt-10" id="about">
    <div className="text-yellow-500 text-4xl font-thin font-sans flex mb-5 -ml-4">
      <FaUserPlus></FaUserPlus> <span className="ml-5 text-white">About Me</span>
    </div>
    <div className="mt-10 mb-10 flex flex-col place-items-center sm:flex-row sm:justify-between">
      <img
        src="https://unavatar.io/ghurtadoarevalo"
        alt=""
        className="rounded-3xl mb-5 w-1/2 h-1/2 sm:w-1/4 sm:h-1/4 sm:ml-20 border-4 border-white rotate-6"
      />
      <div className="text-white/90 font-mono text-[0.9rem] text-left sm:w-3/5 text-pretty mt-10 sm:mt-0">
        <p>
          Me llamo Gustavo Hurtado y llevo aprendiendo de informática desde que dejé mi educación
          escolar, aunque desde siempre he estado ligado a las consolas y computadores.{' '}
          <span className="text-yellow-500">
            Actualmente me desenvuelvo como Ingeniero Full Stack como parte de una célula ágil y un
            equipo multidisciplinario.
          </span>
        </p>
        <br />
        <p>
          Uno de mis grandes logros fue obtener mi Magister en Ingeniería Informática, donde tuve la
          posibilidad de{' '}
          <span className="text-yellow-500">
            entregar una pequeña nueva ventana de conocimiento al mundo
          </span>{' '}
          realizando una investigación sobre ataques cerebro vasculares y complejidad/entropía
          Wavelet.
        </p>
        <br />
        <p>
          Soy un amante del buen café, el cine y los videojuegos, aunque también disfruto de
          realizar mis rutinas en el gimnasio.{' '}
          <span className="text-yellow-500 font-bold">
            My english isn&apos;t perfect, but I&apos;ve been certified at a B1 level{' '}
            <a href="https://www.poliglota.org/dashboard/certificates/90719?source=LinkedIn">
              (Certificate).
            </a>
          </span>
        </p>
      </div>
    </div>
  </aside>
)
export default AboutMe
