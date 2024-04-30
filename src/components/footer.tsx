export default function Footer() {
  return (
    <footer className="mt-auto text-center py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400 flex flex-col">
          <span>
            Desarrollado con React + Tailwind + Typescript.{' '}
            <a
              className="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-gray-400"
              href="https://github.com/ghurtadoarevalo/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto
            </a>
          </span>
          <p className="mt-2">© 2024 gHurtado_dev. </p>
        </p>
      </div>
    </footer>
  )
}
