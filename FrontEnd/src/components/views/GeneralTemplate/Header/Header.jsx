import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledHeader } from "./HeaderStyles";
import logoDB from "../../../../media/logoDB.svg";
import Button from "../../../componentes/Button/Button";
import UserRegistrado from "./UserRegistrado/UserRegistrado";
import MenuDrawer from "./MenuDrawer/MenuDrawer";

export default function Header() {
  const locationRuta = useLocation();
  const deposito = JSON.parse(localStorage.getItem("user"));

  const cerrarSesion = () => {
    localStorage.clear();
  };

  const Router = () => {
    if (locationRuta.pathname === "/user-login") {
      return (
        <>
          <Link to="/user-register" className="link_register">
            <Button text="Crear cuenta" />
          </Link>
        </>
      );
    } else if (locationRuta.pathname === "/user-register") {
      return (
        <>
          <Link to="/user-login" className="link_login">
            <Button text="Iniciar sesión" />
          </Link>
        </>
      );
    } else if (deposito !== null) {
      return (
        <>
          <UserRegistrado datos={deposito} />
          <Link to="/" className="closeSession">
            <i className="fas fa-times" onClick={cerrarSesion}></i>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/user-register" className="link_register">
            <Button text="Crear cuenta" />
          </Link>
          <Link to="/user-login" className="link_login">
            <Button text="Iniciar sesión" />
          </Link>
        </>
      );
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <Link to="/" className="header_left">
        <img src={logoDB} alt="Logo DB" />
        <p className="lema">Vehiculos de todo tipo</p>
      </Link>
      <div className="header_right">{Router(locationRuta)}</div>
      <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
      {open && <MenuDrawer cerrar={() => setOpen(!open)} />}
    </StyledHeader>
  );
}
