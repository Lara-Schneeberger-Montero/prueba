import React from "react";
import { useParams } from "react-router";
import HeaderProduct from "../HeaderProduct/HeaderProduct";
import BookingDetail from "./BookingDetail/BookingDetail";
import { StyledBooking } from "./BookingStyle";

export default function Booking(props) {
  const { id_producto } = useParams();

  return (
    <>
        <HeaderProduct titulo={props.titulo} ruta={"/producto/" + id_producto}/>
        <StyledBooking>
            <div className="left">

            </div>
            <div className="right">
                <BookingDetail ubicacion={props.ubicacion} imagen={props.imagen} titulo={props.titulo}/>
            </div>
        </StyledBooking>
    </>
  );
}

