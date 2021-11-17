import React from "react";
import TitleLine from "../Detail/TitleLine/TitleLine";
import polices from "../../../../media/polices.json";
import InfoBox from "./InfoBox/InfoBox";
import { StyledPolicies } from "./PoliciesStyle";

export default function Policies() {
  return (
    <>
      <TitleLine title="Qué tenés que saber" />
      <StyledPolicies data-testid="styledPoliticies">
        {polices.map((e, i) => {
          return <InfoBox title={e.title} arrP={e.paragraphs} key={i} />;
        })}
      </StyledPolicies>
    </>
  );
}

// Bloque de política del producto

// Crear un bloque que cubra el 100% del contenedor que incluya una grilla de
// (3 desktop, 2 tablet, 1 phone) columnas con:

// Normas: Título y descripción.
// Seguridad: Título y descripción.
// Cancelación: Título y descripción.
