type imgsType = {
	url: string,
	aspectRatio: string
}

type imgSliderlType = {
  children: imgsType[]
}



const ImgSlider = ({ children }: imgSliderlType) => {

  const imgStyle = children.length > 1 ? "snap-start snap-mandatory rounded-xl py-2 mx-4 inline-block" : "rounded-xl py-2"

  return (
    <div className="overflow-x-auto snap-x scroll-smooth whitespace-nowrap">
      {children.map((image, index) => (
        <img
          src={image.url}
          className={`${imgStyle} ${image.aspectRatio}`}
          key={index}
          loading="lazy"
        />
      ))}

    </div>
  );
}


export default ImgSlider


