import React from "react";
import { useEffect, useState } from "react";
import { StyledSelect } from "./SelectStyle";

export default function Select(props) {
  const [listaCiudades, setListaCiudades] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [clase, setClase] = useState("opciones");
  const [ciudad, setCiudad] = useState("Seleccione ciudad");

  useEffect(() => {
    const settings = {
      method: "GET",
    };

    function listarCiudades() { 
      fetch("http://localhost:8080/ciudad/listarCiudades", settings)
        .then((response) => response.json())
        .then((data) => {
          setListaCiudades(data);
          console.log(listaCiudades);
        })
        .catch((error) => {
          console.log("Error en el listado general");
          console.log(error);
        });
    }
    listarCiudades();
  }, []);

  return (
    <StyledSelect>
      <div className="selectBox">
        <div
          onClick={(event) => {
            event.target.classList.toggle("active");
            toggle ? setClase("opciones") : setClase("opciones active");
            setToggle(!toggle);
          }}
          className="select"
          id="select"
        >
          <div className="contenido-Select">
            <p className="titulo">{ciudad}</p>
          </div>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className={clase} id="opciones">
          {(!listaCiudades.length) ? <></> : //si la lista de ciudades esta vacia, no se muestra nada
            (listaCiudades.map((e, i) => { //si la lista de ciudades no esta vacia, se muestran las ciudades
            return (
              <>
                <div
                  key={e.id_ciudad}
                  className="opcion"
                  onClick={(event) => {
                    event.preventDefault();
                    setCiudad(e.nombre + ", " + e.pais_ciudad);
                    props.cityChange(e.id_ciudad, e.nombre);
                    setClase("opciones");
                    setToggle(!toggle);
                  }}
                >
                  <div className="contenido-opcion">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="textos">
                      <h3 className="ciudad">{e.nombre}</h3>
                      <p className="pais">{e.pais_ciudad}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          }))}
        </div>
      </div>
    </StyledSelect>
  );
}
