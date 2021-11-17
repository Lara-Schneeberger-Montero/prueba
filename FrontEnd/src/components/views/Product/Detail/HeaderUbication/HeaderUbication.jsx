import React from "react";
import { StyledHeader } from "./HeaderUbicationStyle";
import star from "../../../../../media/icons/star.svg";

export default function HeaderUbication(props) {
  return (
    <StyledHeader data-testid="categoriaHeaderUbicacion">
      <div className="container">
        <i class="fas fa-map-marker-alt"></i>
        <p data-testid="ubicacionHeaderUbicacion">{props.ubicacion}</p>
        
      </div>
      <div className="container">
        <div>
          <p>Muy Bueno</p>
          <div className="container-star">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="calificacion">
          <h4 data-testid="calificacionHeaderUbicacion">8</h4>
        </div>
      </div>
    </StyledHeader>
  );
}
