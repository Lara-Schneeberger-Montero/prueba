import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./HeaderProductStyle";

export default function HeaderProduct(props) {
  return (
    <StyledHeader data-testid="styledHeaderProducto">
      <div className="container">
        <h2 data-testid="categoriaHeaderProducto">{props.categoria}</h2>
        <h1 data-testid="nombreHeaderProducto">{props.titulo}</h1>
      </div>
      <div className="container">
        <Link to={props.ruta}>
          <i class="fas fa-chevron-left"></i>
        </Link>
      </div>
    </StyledHeader>
  );
}
