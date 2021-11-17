import React from "react";
import { useParams } from "react-router-dom";
import Categories from "./HomeComponents/Categories/Categories";
import Recommendations from "./HomeComponents/Recomendations/Recommendations";
import Search from "./HomeComponents/Search/Search";
import Filtered from "./HomeComponents/Filtered/Filtered";

export default function Home() {
  const { titulo, id_ciudad } = useParams();

  return (
    <>
      <Search />
      <Categories />
      {!titulo ? <Recommendations /> :
        (!id_ciudad ? <Filtered filtro={titulo} titulo={"http://localhost:8080/producto/buscarPorCategoria/" + titulo} /> :
         <Filtered filtro={titulo} titulo={"http://localhost:8080/producto/buscarPorCiudad/" + id_ciudad} />) }
    </>
  );
}
