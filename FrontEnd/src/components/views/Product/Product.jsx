import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import Detail from "./Detail/Detail";
import Booking from "./Booking/Booking";
import Policies from "./Policies/Policies";
import Spinner from "../../componentes/Spinner/Spinner";
import { useLocation } from "react-router-dom";

export default function Product() {

  const [ isBooking, setIsBooking ] = useState(false);
  const [producto, setProducto] = useState([]);
  //const producto = [];

  const path = useLocation().pathname.split("/");
  let { id_producto } = useParams();

  const handleBooking = (res) => {
    setIsBooking(res);
  }

  useEffect(() => {
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
      }
    };
    function searchProducto() {
      fetch("http://localhost:8080/producto/buscarProducto/"+id_producto, settings)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducto(data);
      })
      .catch((error) => {
        console.log("Error en el listado general");
        console.log(error);
      });
    }
    searchProducto();
  }, []);

  useEffect(() => {
    (path[3] === "reserva") ? handleBooking(true) : handleBooking(false); // si es reserva, se muestra el booking
  }, [path[3]]);

  return (
    <div className="fondo">
      {(producto.length === 0 ? (<><Spinner /></>) :
        (isBooking ? (<Booking 
          ubicacion={producto.ciudad.nombre + ", " + producto.ciudad.pais_ciudad}
          titulo={producto.nombre_producto}
          imagen={producto.imagenes[0].url}     
          />) :
          (<Detail
            // categoria={producto.categoria.titulo}
            ubicacion={producto.ciudad.nombre + ", " + producto.ciudad.pais_ciudad}
            titulo={producto.nombre_producto}
            arrImg={producto.imagenes}
            descripcion={producto.descripcion_producto}
            marca={producto.caracteristicas[0].marca}
            modelo={producto.caracteristicas[0].modelo}
            anio={producto.caracteristicas[0].anio}
            combustible={producto.caracteristicas[0].combustible}
            transmision={producto.caracteristicas[0].transmision}
            puertas={producto.caracteristicas[0].puertas}
            motor={producto.caracteristicas[0].motor}
            aire={producto.caracteristicas[0].aire}
          />)
        )
      )
      }
      <Policies />
    </div>
  );
}

