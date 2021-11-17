import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "./Card.style";
import ButtonFullBackground from "../../../../../componentes/ButtonFullBackground";
import point from "../../../../../../media/icons/point.svg";
import star from "../../../../../../media/icons/star.svg";
import wifi from "../../../../../../media/icons/wifi.svg";
import gps from "../../../../../../media/icons/gps.svg";

export default function Card(props) {
  const ubicacionMapa = "https://www.google.com/maps/" + props.mapa;
  const url = "/producto/" + props.idBoton;

  const calificacion = () => {
    let cal = props.calificacion;
    let res = 0;

    if (cal === 10) {
      res = "Excelente";
    } else if (cal >= 8) {
      res = "Muy bueno";
    } else if (cal >= 6) {
      res = "Bueno";
    } else if (cal >= 4) {
      res = "Regular";
    } else if (cal >= 2) {
      res = "Malo";
    } else {
      res = "Muy malo";
    }
    return res;
  };

  return (
    <StyledCard>
      <div id={props.id} className="card-container">
        <div className="card-img">
          <img src={props.img} alt={props.titulo} />
          <i class="fas fa-heart"></i>
        </div>
        <div className="card-body">
          <div data-testid="card-cabecera" className="card-cabecera">
            <div>
              <h5 className="card-categories">
                {props.categoria}
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </h5>
              <h4 className="card-title">{props.titulo}</h4>
            </div>
            <div className="card-title-points">
              <h4>{props.calificacion}</h4>
              <h5 data-testid="calificacion">{calificacion()}</h5>
            </div>
          </div>
          <div data-testid="card-description" className="card-description">
            <div className="card-ubicacion">
              <p>
                <img src={point} alt="point" />
                {props.ubicacion}
                <a href={ubicacionMapa} target="_blank" rel="noreferrer">
                  VER EN EL MAPA
                </a>
              </p>
            </div>
            <div data-testid="card-accesorios" className="card-accesorios">
              <img src={wifi} alt="wifi" />
              <img src={gps} alt="gps" />
            </div>
            <p className="card-text">{props.text}</p>
          </div>
          <Link to={url}>
            <ButtonFullBackground content="Ver más" />
          </Link>
        </div>
      </div>
    </StyledCard>
  );
}
