import React from "react";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <i class="fas fa-chevron-right"></i>
      ) : (
        <i class="fas fa-chevron-left"></i>
      )}
    </button>
  );
}
