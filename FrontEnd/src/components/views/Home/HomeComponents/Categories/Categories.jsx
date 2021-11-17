import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledCategories } from "./CategoriesStyles";
import Spinner from "../../../../componentes/Spinner/Spinner";

export default function Categories() {
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    const settings = {
      method: "GET",
    };

    function listarCategorias() {
      fetch("http://localhost:8080/listarCategorias", settings)
        .then((response) => response.json())
        .then((data) => {
          setListaCategorias(data);
          console.log(data);
        })
        .catch((error) => {
          console.log("Error en el listado general");
          console.log(error);
        });
    }
    listarCategorias();
  }, []);
  
  return (
    <StyledCategories data-testid="styleCategorias">
      <div className="container">
        <h2 className="">Categorias</h2>
        <p></p>
        <ul data-testid="cardsCategorias" className="cardsCategoria">
          {(!listaCategorias.length)
            ? <><Spinner /></>
            : listaCategorias.map((categoria, i) => (
                <li data-testid="lista-categorias" key={i} title={categoria.descripcion_categoria}>
                  <Link
                    to={"/filtro/" + categoria.titulo}
                    className="imagen"
                  >
                    <img
                      data-testid="url"
                      src={categoria.url_categoria}
                      alt={categoria.titulo}
                    />
                  </Link>
                  <div className="contenido">
                    <h3 className="titulo" data-testid="titulo">
                      {categoria.titulo}
                    </h3>
                    <p>{categoria.productos.length} Vehiculos</p>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </StyledCategories>
  );
}
