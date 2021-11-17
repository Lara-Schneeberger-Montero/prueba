import React from "react";

export default function ButtonFullBackground(props) {
    return (
        <button id={props.idBoton} type="submit" onClick={props.onClick}>{props.content}</button>
    );
}