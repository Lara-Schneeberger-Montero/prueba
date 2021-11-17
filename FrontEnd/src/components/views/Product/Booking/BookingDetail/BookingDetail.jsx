import React from "react";
import { StyledDetailBooking } from "./BookingDetailStyle";
import star from "../../../../../media/icons/star.svg";

export default function BookingDetail(props) {
    return (
        <StyledDetailBooking>
            <div className="titulo">
                <h2>Detalle de la reserva</h2>
                <img className="imagenPrincipal" src={props.imagen} alt="" />
            </div>
            <div className="description">
                <h5>categoría</h5>
                <h4>{props.titulo}</h4>
                <div className="calificacion">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <p className="ubicacion"><i class="fas fa-map-marker-alt"></i> {props.ubicacion}</p>
                <div className="fechas">
                    <div className="check">
                        <h5>Check-in</h5>
                        <p>Lunes, 22 de junio</p>
                    </div>
                    <div className="check">
                        <h5>Check-out</h5>
                        <p>Martes, 23 de junio</p>
                    </div>
                </div>
                <div className="boton">Confirmar reserva</div>
            </div>
            
        </StyledDetailBooking>
    );
}