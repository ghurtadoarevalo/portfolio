import { useState, useEffect } from 'react'
import { MdFlipCameraAndroid } from 'react-icons/md'

interface imgsType {
  url: string
  aspectRatio: string
}

interface imgSliderlType {
  children: imgsType[]
}

const escMessageTimeout = 3000 //3 segundos para el ESC

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
      <div className="overflow-x-auto scroll-smooth whitespace-nowrap place-self-center">
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
        <div className="bg-black/70 fixed inset-0 overflow-y-scroll scroll-smooth h-screen w-screen pt-5 z-40">
          <button
            className="fixed top-0 right-0 pr-4 py-1 m-3 z-50 text-white/80 bg-yellow-600/60 rounded-3xl hover:bg-yellow-600/40"
            onClick={() => closeModal()}
          >
            <span className="pl-4 font-bold text-white/80  z-50 ">X</span> Close
          </button>

          {showEscMessage ? (
            <>
              <div className="hidden left-0 top-20 right-0 m-auto sm:block bg-black/80 fixed text-center z-40 w-1/2 p-10 text-xl text-white/50 font-thin rounded-lg animate-pulse">
                Press ESC to close the slider
              </div>
              <div className="sm:hidden left-0 top-20 right-0 m-auto bg-black/80 fixed text-center z-40 w-1/2 p-10  font-thin rounded-lg animate-pulse">
                <div className="flex flex-row text-xl text-white/50">
                  <span className="text-3xl place-self-center">
                    <MdFlipCameraAndroid />
                  </span>{' '}
                  Rotate your phone for a better experience
                </div>
              </div>
            </>
          ) : null}

          <div className="pt-10 absolute left-0 right-0 ml-auto mr-auto w-screen">
            {children.map((image, index) => (
              <img
                src={image.url}
                className={
                  'mb-10 xl:max-w-screen-2xl shadow-md snap-start snap-mandatory' +
                  ` aspect-[${image.aspectRatio}] left-0 right-0 ml-auto mr-auto w-screen`
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
