import React from "react";
import { StyledRegister } from "./UserRegister.style";
import { Link } from "react-router-dom";
import DivError from "../../componentes/DivError";
import { useHistory } from "react-router-dom";

export default function UserRegister() {
  const history = useHistory();
  const datosHardcodeados = {
    name: "",
    apellido: "",
    email: "",
    password: "",
    // email: "pepito@mail.com",
    // password:"12345abcd"
  };

  function validaciones(event) {
    event.preventDefault();
    let nombre = document.getElementById("form-name");
    let apellido = document.getElementById("form-lastName");
    let email = document.getElementById("form-email");
    let password = document.getElementById("form-pass");
    let passwordRepeat = document.getElementById("form-confirm-pass");
    const errorName = document.querySelector("#error-name");
    const errorLastname = document.querySelector("#error-lastName");
    const errorEmail = document.querySelector("#error-email");
    const errorPassword = document.querySelector("#error-password");
    const errorConfirmPassword = document.querySelector(
      "#error-confirmPassword"
    );

    if (nombre.value === "") {
      nombre.style.border = "1px solid #FF0000";
      errorName.classList.remove("hidden");
      errorName.classList.add("visible");
    }
    if (apellido.value === "") {
      apellido.style.border = "1px solid #FF0000";
      errorLastname.classList.remove("hidden");
      errorLastname.classList.add("visible");
    }
    if (!email.value.includes("@") | !email.value.includes(".com")) {
      // | email.value !== datosHardcodeados.email) {
      email.style.border = "1px solid #FF0000";
      errorEmail.classList.remove("hidden");
      errorEmail.classList.add("visible");
    }
    if (password.value.length <= 6) {
      // | password.value !== datosHardcodeados.password) {
      password.style.border = "1px solid #FF0000";
      errorPassword.classList.remove("hidden");
      errorPassword.classList.add("visible");
    }
    if (
      (passwordRepeat.value === "") |
      (password.value !== passwordRepeat.value)
    ) {
      passwordRepeat.style.border = "1px solid #FF0000";
      errorConfirmPassword.classList.remove("hidden");
      errorConfirmPassword.classList.add("visible");
    } else {
      datosHardcodeados.name = nombre.value;
      datosHardcodeados.apellido = apellido.value;
      datosHardcodeados.email = email.value;
      datosHardcodeados.password = password.value;

      localStorage.setItem("user", JSON.stringify(datosHardcodeados));
      history.push("/user-login");
    }
    // else if(email.value === datosHardcodeados.email && password.value === datosHardcodeados.password && passwordRepeat.value === datosHardcodeados.password){
    //     history.push("/user-login");
    // }
  }

  const handlerOnchangeName = () => {
    let nombre = document.getElementById("form-name");
    const errorName = document.querySelector("#error-name");
    errorName.classList.add("hidden");
    nombre.style.border = "none";
  };
  const handlerOnchangeLastName = () => {
    let apellido = document.getElementById("form-lastName");
    const errorLastname = document.querySelector("#error-lastName");
    errorLastname.classList.add("hidden");
    apellido.style.border = "none";
  };
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
  const handlerOnchangeConfirmPassword = () => {
    let passwordRepeat = document.getElementById("form-confirm-pass");
    const errorConfirmPassword = document.querySelector(
      "#error-confirmPassword"
    );
    errorConfirmPassword.classList.add("hidden");
    passwordRepeat.style.border = "none";
  };

  return (
    <StyledRegister>
      <form action="">
        <h2>Crear cuenta</h2>
        <div className="full-name">
          <label id="form-name-label" htmlFor="form-name">
            Nombre <br />
            <input
              type="text"
              name="form-name"
              id="form-name"
              onChange={handlerOnchangeName}
            />
            <DivError
              nameId="error-name"
              nameClass="hidden"
              texto="Por favor ingresar nombre"
            />
          </label>
          <label htmlFor="form-lastName">
            Apellido <br />
            <input
              type="text"
              name="form-lastName"
              id="form-lastName"
              onChange={handlerOnchangeLastName}
            />
            <DivError
              nameId="error-lastName"
              nameClass="hidden"
              texto="Por favor ingresar apellido"
            />
          </label>
        </div>
        <label htmlFor="form-email">
          Correo electrónico <br />
          <input
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
            type="password"
            name="form-pass"
            id="form-pass"
            onChange={handlerOnchangePassword}
          />
          <DivError
            nameId="error-password"
            nameClass="hidden"
            texto="La contraseña debe tener mas de 6 caracteres"
          />
        </label>
        <label htmlFor="form-confirm-pass">
          Confirmar contraseña <br />
          <input
            type="password"
            name="form-confirm-pass"
            id="form-confirm-pass"
            onChange={handlerOnchangeConfirmPassword}
          />
          <DivError
            nameId="error-confirmPassword"
            nameClass="hidden"
            texto="Por favor ingrese contraseña correcta"
          />
        </label>
        <button type="submit" onClick={validaciones} id="primary-btn">
          Crear cuenta
        </button>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/user-login">
            <span>Iniciar sesión</span>
          </Link>
        </p>
      </form>
    </StyledRegister>
  );
}
