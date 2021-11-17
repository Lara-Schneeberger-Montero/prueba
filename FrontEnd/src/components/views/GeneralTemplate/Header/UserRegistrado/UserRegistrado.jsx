import React from "react";
import { StyledUserRegistrado } from "./UserRegistradoStyles";
export default function UserRegistrado({ datos }) {
  return (
    <StyledUserRegistrado>
      <div className="avatar">
        <p>
          {datos.name.charAt(0).toUpperCase()}
          {datos.apellido.charAt(0).toUpperCase()}
        </p>
      </div>
      <div className="greetings">
        <p>
          Hola, <br />
          <span>
            {datos.name.split(" ", 1)} {datos.apellido.split(" ", 1)}
          </span>
        </p>
      </div>
    </StyledUserRegistrado>
  );
}
