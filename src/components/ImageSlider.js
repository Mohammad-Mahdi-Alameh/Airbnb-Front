import { useState } from "react";
import dislike from "../../src/dislike.svg";
import like from "../../src/like.svg";


const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};





const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "10px",
    color: 'white',
};

const ImageSlider = ({ slides }) => {
    const [visible, setVisible] = useState(true);

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
        <div className="sliderStyles" >
            <div>
                {<button onClick={goToPrevious} className="leftArrowStyles">
                    ❰
                </button>}
                {<button onClick={goToNext} className="rightArrowStyles">
                    ❱
                </button>}

            </div>
            <div style={slideStylesWidthBackground}>
                <div className="heart">{visible && <img  onClick={() =>setVisible(!visible)} src={dislike}/>}</div>
                <div className="heart">{!visible && <img  onClick={() =>setVisible(!visible)} src={like}/>}
                </div>
                <div className="bottom">
                    <div className="dotsContainerStyles">
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