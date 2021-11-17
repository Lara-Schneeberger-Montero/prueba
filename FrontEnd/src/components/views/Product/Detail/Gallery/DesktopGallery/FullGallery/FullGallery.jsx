import React, { useEffect, useState } from "react";
import BtnSlider from "./BtnSlider/BtnSlider";
import { StyledFullGallery } from "./FullGalleryStyles";

function FullGallery({ close, arrImg }) {
  /* ------------------------------------------ No Scroll when open  ----------------------------------------- */
  function noScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", noScroll);
    return () => {
      window.removeEventListener("scroll", noScroll);
    };
  }, []);
  /* -------------------------------------------- more -------------------------------------------- */
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== arrImg.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === arrImg.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(arrImg.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <StyledFullGallery>
      <div className="container">
        <i class="fas fa-times" onClick={close}></i>
        {arrImg.map((e, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={e.id}
            >
              <img src={e.url} alt={e.title} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: arrImg.length }).map((e, i) => (
            <div
              onClick={() => moveDot(i + 1)}
              className={slideIndex === i + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </StyledFullGallery>
  );
}

export default FullGallery;
