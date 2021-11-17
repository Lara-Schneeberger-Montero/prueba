import React from "react";
import Features from "./Features/Features";
import HeaderProduct from "../HeaderProduct/HeaderProduct";
import HeaderUbication from "./HeaderUbication/HeaderUbication";
import Gallery from "./Gallery/Gallery";
import MapProduct from "./MapProduct/MapProduct";
import ProductDescription from "./ProductDescription/ProductDescription";
// import producto from "../../../../media/lista.json";
import CalendarProduct from "../CalendarProduct/CalendarProduct";

export default function Detail(props) {

    return (
      <>
        <HeaderProduct categoria={props.categoria} titulo={props.titulo} ruta="/"/>
        <HeaderUbication ubicacion={props.ubicacion} />
        {/* ubicacion={producto.ciudad.nombre + ', ' + producto.ciudad.pais_ciudad} */}
        <Gallery arrImg={props.arrImg} />
        <ProductDescription descripcion={props.descripcion} />
        {/* {
          producto.length === 0 ? (
          <></>
          ) : ( */}
      <Features
          marca={props.marca}
          modelo={props.modelo}
          anio={props.anio}
          combustible={props.combustible}
          transmision={props.transmision}
          puertas={props.puertas}
          motor={props.motor}
          aire={props.aire}
          />  
        <CalendarProduct />
        <MapProduct ubicacion={props.ubicacion}/>
      </>
    );
  }
  


/* ----------------------------- Para fetch a base de datos en nube ----------------------------- */

/*      {producto.length === 0 ? (
        <></>
      ) : (
        //   productos.map((producto => (
        <Features
          marca={producto.caracteristica.marca}
          modelo={producto.caracteristica.modelo}
          anio={producto.caracteristica.anio}
          combustible={producto.caracteristica.combustible}
          transmision={producto.caracteristica.transmision}
          puertas={producto.caracteristica.puertas}
          motor={producto.caracteristica.motor}
          aire={producto.caracteristica.aire}
        />
      )
      } */

