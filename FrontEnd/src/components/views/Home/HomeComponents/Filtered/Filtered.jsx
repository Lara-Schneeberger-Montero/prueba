import React, { useEffect, useState } from "react";
import Card from "../Recomendations/Card/Card";
import { StyledRecomendations } from "../Recomendations/RecomendationsStyles";
import Spinner from "../../../../componentes/Spinner/Spinner"

export default function Filtered(props) {
  const [carList, setCarList] = useState([]);

  /* ---------------------------- FETCH ---------------------------- */
  const settings = {
    method: "GET",
  };
  function list() {
    fetch(`${props.titulo}`, settings)
      .then((response) => response.json())
      .then((data) => {
        setCarList(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("holaa");
        console.log(error);
      });
  }
  useEffect(() => {
    setCarList([]);
    list();
  }, [props.titulo]);
  return (
    <StyledRecomendations>
      <div className="container">
        <h2>Filtrado por {props.filtro}</h2>
        <h3>{carList.length} Resultados encontrados</h3>
        <div data-testid="Cards" className="cards">
          {!carList.length ? (
            <>
              <Spinner />
            </>
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
              />
            ))
          )}
        </div>
      </div>
    </StyledRecomendations>
  );
}