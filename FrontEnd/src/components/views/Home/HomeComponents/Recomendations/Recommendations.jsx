import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Spinner from "../../../../componentes/Spinner/Spinner";
import { StyledRecomendations } from "./RecomendationsStyles";


export default function Recommendations() {
  const [carList, setCarList] = useState([]);

  /* ---------------------------- FETCH ---------------------------- */
  useEffect(() => {
    const settings = {
      method: "GET",
    };

    function list() {
      fetch("http://localhost:8080/producto/listarProductos", settings)
        .then((response) => response.json())
        .then((data) => {
          setCarList(data);
          console.log("setListCardlist");
          console.log(data);
        })
        .catch((error) => {
          console.log("holaa");
          console.log(error);
        });
    }
    list();
  }, []);

  return (
    <StyledRecomendations>
      <div className="container">
        <h2>Recomendaciones</h2>
        <div data-testid="Cards" className="cards">
          {(!carList.length) ? (
            <><Spinner /></>
          ) : (
            carList.map((product) => (
              <Card
                idBoton={product.id_producto}
                key={product.id_producto}
                img={product.imagenes[0].url}
                categoria={product.titulo}
                titulo={product.nombre_producto}
                ubicacion={product.ciudad.nombre + ", " + product.ciudad.pais_ciudad}
                text={product.descripcion_producto}
                mapa={"place/"+product.ciudad.nombre}
                //calificacion={product.calificacion}
                calificacion={8}
                id_producto={product.id_producto}
              />
            ))
          )}
        </div>
      </div>
    </StyledRecomendations>
  );
}

// <>
// {carList.length === 0 ? (
//   <> </>
// ) : (
//   carList.map((car, i) => (        ))
//   )}
// </>
