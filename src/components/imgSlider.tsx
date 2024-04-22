
type imgsType = {
  url: string,
  aspectRatio: string
}

type imgSliderlType = {
  children: imgsType[],
  openModal: Function,
}


const ImgSlider = ({ children, openModal}: imgSliderlType) => {


  const imgStyle = children.length > 1 ? "snap-start snap-mandatory rounded-xl py-2 mx-4 inline-block" : "rounded-xl py-2"

  return (
    <>
      <div className="overflow-x-auto snap-x scroll-smooth whitespace-nowrap">
        {children.map((image, index) => (
          <button onClick={() => {
            openModal(image)
          }} key={index}>
            <img
              src={image.url}
              className={`${imgStyle} aspect-[${image.aspectRatio}]`}
              loading="lazy"
            />
          </button>

        ))}
      </div>

    </>
  );

}


export default ImgSlider


