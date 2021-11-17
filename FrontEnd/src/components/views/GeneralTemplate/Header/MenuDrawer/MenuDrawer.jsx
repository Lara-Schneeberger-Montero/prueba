import React, { useEffect } from "react";
import { StyledMenuDrawer } from "./MenuDrawerStyles";
import SocialMedia from "../../SocialMedia/SocialMedia";
import { Link, useLocation } from "react-router-dom";
import UserRegistrado from "../UserRegistrado/UserRegistrado";

export default function MenuDrawer({ cerrar }) {
  /* ------------------------------------------ No Scroll when open  ----------------------------------------- */
  function noScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", noScroll);
    return () => {
      window.removeEventListener("scroll", noScroll);
    };
  }, []);

  /* ------------------------- render components depending on the pathname ------------------------ */

  const locationRuta = useLocation();
  const deposito = JSON.parse(localStorage.getItem("user"));

  const cerrarSesion = () => {
    localStorage.clear();
  };

  const Router = () => {
    if (locationRuta.pathname === "/user-login" && deposito === null) {
      return (
        <>
          <Link to="/user-register" className="link_register" onClick={cerrar}>
            <p>Crear cuenta</p>
          </Link>
        </>
      );
    } else if (
      locationRuta.pathname === "/user-register" &&
      deposito === null
    ) {
      return (
        <>
          <Link to="/user-login" className="link_login" onClick={cerrar}>
            <p>Iniciar sesión</p>
          </Link>
        </>
      );
    } else if (deposito !== null) {
      return (
        <>
          <Link to="/" className="closeSession" onClick={cerrarSesion}>
            <p>
              ¿Deseas <span>cerrar sesión</span>?
            </p>
            <hr />
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/user-register" className="link_register" onClick={cerrar}>
            <p>Crear cuenta</p>
          </Link>
          <hr />
          <Link to="/user-login" className="link_login" onClick={cerrar}>
            <p>Iniciar sesión</p>
          </Link>
        </>
      );
    }
  };

  const Router2 = () => {
    if (deposito !== null) {
      return <UserRegistrado datos={deposito} />;
    } else {
      return <p id="menu">MENÚ</p>;
    }
  };

  return (
    <StyledMenuDrawer>
      <div className="transparent" onClick={cerrar}></div>
      <div className="visible">
        <div className="upperBox">
          <i className="fas fa-times" onClick={cerrar}></i>
          {Router2(locationRuta)}
        </div>
        <div className="lowerBox">
          <div className="BotonesMobile">{Router(locationRuta)}</div>
          <SocialMedia />
        </div>
      </div>
    </StyledMenuDrawer>
  );
}
