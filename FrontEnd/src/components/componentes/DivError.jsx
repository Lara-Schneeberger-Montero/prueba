import React from "react";

export default function DivError(props) {
    return (
        <>
            <div id={props.nameId} className={props.nameClass}>
                <small>{props.texto}</small>
            </div>
        </>
    )
}
