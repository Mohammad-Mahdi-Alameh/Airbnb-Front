import { useState } from "react";


const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};



const sliderStyles = {
  position: "relative",
  height: "100%",
};



const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "10px",
  color :'white',
};

const ImageSlider = ({ slides }) => {
const [visible,setVisible]=useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}  onMouseOver={() =>   setVisible(true)} onMouseLeave={() =>   setVisible(false)}>
      <div>
        {visible && <button onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </button>}
        {visible &&<button onClick={goToNext} className="rightArrowStyles">
          ❱
        </button>}
        
      </div>
      <div style={slideStylesWidthBackground}><div className="bottom"><div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div></div> </div>
     
    </div>
  );
};

export default ImageSlider;