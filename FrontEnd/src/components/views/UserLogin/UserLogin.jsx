import React from "react";
import { StyledLogin } from "./UserLogin.style";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DivError from "../../componentes/DivError";

export default function UserLogin() {
  const history = useHistory();
  const deposito = JSON.parse(localStorage.getItem("user"));

  function validaciones(event) {
    event.preventDefault();
    let email = document.getElementById("form-email");
    let password = document.getElementById("form-pass");
    const errorEmail = document.querySelector("#error-email");
    const errorPassword = document.querySelector("#error-password");
    const error = document.querySelector("#error");

    if (
      !email.value.includes("@") |
      !email.value.includes(".com") |
      (email.value !== deposito.email)
    ) {
      email.style.border = "1px solid #FF0000";
      errorEmail.classList.remove("hidden");
      errorEmail.classList.add("visible");
      error.classList.remove("hidden");
      error.classList.add("visible");
    }
    if ((password.value.length <= 6) | (password.value !== deposito.password)) {
      password.style.border = "1px solid #FF0000";
      errorPassword.classList.remove("hidden");
      errorPassword.classList.add("visible");
      error.classList.remove("hidden");
      error.classList.add("visible");
    } else {
      history.push("/");
    }
  }
  const handlerOnchangeEmail = () => {
    let email = document.getElementById("form-email");
    const errorEmail = document.querySelector("#error-email");
    errorEmail.classList.add("hidden");
    email.style.border = "none";
  };
  const handlerOnchangePassword = () => {
    let password = document.getElementById("form-pass");
    const errorPassword = document.querySelector("#error-password");
    errorPassword.classList.add("hidden");
    password.style.border = "none";
  };

  return (
    <StyledLogin>
      <form action="">
        <h2>Iniciar Sesión</h2>
        <label htmlFor="form-email">
          Correo electrónico <br />
          <input
            data-testid="email"
            type="email"
            name="form-email"
            id="form-email"
            onChange={handlerOnchangeEmail}
          />
          <DivError
            nameId="error-email"
            nameClass="hidden"
            texto="Por favor ingresar correo electrónico válido"
          />
        </label>
        <label htmlFor="form-pass">
          Contraseña <br />
          <input
          data-testid="password"
            type="password"
            name="form-pass"
            id="form-pass"
            onChange={handlerOnchangePassword}
          />
          <DivError
            nameId="error-password"
            nameClass="hidden"
            texto="La contraseña es incorrecta"
          />
        </label>
        <DivError
          nameId="error"
          nameClass="hidden"
          texto="Por favor, vuelva a intentarlo sus credenciales son inválidas"
        />
        <button type="submit" onClick={validaciones}>
          Ingresar
        </button>
        <p>
          ¿Aún no tenes cuenta?{" "}
          <Link to="/user-register">
            <span>Registrate</span>
          </Link>
        </p>
      </form>
    </StyledLogin>
  );
}
