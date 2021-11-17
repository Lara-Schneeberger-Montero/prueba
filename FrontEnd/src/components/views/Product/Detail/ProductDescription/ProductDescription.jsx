import React from "react";
import { StyledDescription } from "./ProductDescriptionStyle";

export default function ProductDescription(props) {
    return (
        <StyledDescription data-testid="styledDescription">
            <h2 data-testid="titleDescription">Descripción del vehículo</h2>
            <p data-testid="contentDescription">
            {props.descripcion}
            </p>
        </StyledDescription>
    );
}
