import { useState, useEffect } from 'react'

interface imgsType {
  url: string
  aspectRatio: string
}

interface imgSliderlType {
  children: imgsType[]
}

const escMessageTimeout = 5000 //5 segundos para el ESC

const ImgSlider = ({ children }: imgSliderlType) => {
  const [showModal, setShowModal] = useState(false)
  const [showEscMessage, setShowEscMessage] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  const openModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
    setShowEscMessage(true)
    setTimeout(() => {
      setShowEscMessage(false)
    }, escMessageTimeout)
  }

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const imgStyle =
    children.length > 1 ? 'snap-start snap-mandatory py-2 inline-block' : 'rounded-xl py-2'

  return (
    <>
      <div className="overflow-x-auto scroll-smooth whitespace-nowrap ">
        {children.map((image, index) => (
          <button
            className=""
            onClick={() => {
              openModal()
            }}
            key={index}
          >
            <img
              alt={`${index}`}
              src={image.url}
              className={`${imgStyle} aspect-[${image.aspectRatio}]`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {showModal && (
        <div className="bg-black/70 fixed inset-0 overflow-y-scroll scroll-smooth h-screen w-screen pt-5">
          <button
            className="fixed top-0 right-0 z-40 pr-4 py-1 m-3 text-white/80 bg-yellow-600/60 rounded-3xl hover:bg-yellow-600/40"
            onClick={() => closeModal()}
          >
            <span className="pl-4 font-bold text-white/80">X</span> Close
          </button>

          {showEscMessage ? (
            <p className="fixed top-0 left-1/2 place-content-center z-40 p-4 py-1 m-3 text-white/50 font-thin rounded-3xl hover:bg-white/40 animate-pulse">
              Press ESC
            </p>
          ) : null}

          <div className="place-items-center mt-10">
            {children.map((image, index) => (
              <img
                src={image.url}
                className={
                  'mb-10 shadow-md snap-start snap-mandatory rounded-t-3xl rounded-b-md' +
                  ` aspect-[${image.aspectRatio}]`
                }
                loading="lazy"
                alt={`${index}`}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ImgSlider
