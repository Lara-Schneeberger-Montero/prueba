import React, { useRef, useEffect } from "react";
import ShareLike from "../ShareAndLike/ShareLike";
import { StyledTabMobGallery } from "./TabMobGalleryStyles";

export default function TabMobGallery({ arrImg }) {
  const slideshow = useRef(null);

  const next = () => {
    // compruebo que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `1000ms ease-out all`;
      slideshow.current.style.transform = "translateX(-100%)";

      const transition = () => {
        // reinicio la posicion del slideshow
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // tomo el primer elemeto y lo mando al final
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      next();
    }, 3000);

    // Eliminamos los intervalos
    slideshow.current.addEventListener("click", () => {
      clearInterval(intervalo);
    });

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <>
      <StyledTabMobGallery>
        <ShareLike dale={next} />
        <div className="slidesContainer" ref={slideshow}>
          {(!arrImg) ? <></> : (arrImg.map((e, index) => (
            <div
              className="slide"
              key={e.id}
              alt={e.title}
              style={{ backgroundImage: `url(${e.url})` }}
            >
              <p className="imgCount">
                {index + 1}/{arrImg.length}
              </p>
            </div>
          )))}
        </div>
      </StyledTabMobGallery>
    </>
  );
}
