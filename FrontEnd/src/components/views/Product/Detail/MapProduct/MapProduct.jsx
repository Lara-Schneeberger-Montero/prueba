import React from "react";
import TitleLine from "../TitleLine/TitleLine";
import { StyledMap } from "./MapProductStyle";

export default function MapProduct(props) {
    return (
        <>
            <TitleLine title="¿Dónde va a estar?" />
            <StyledMap data-testid="styledMap">
                <div className="mapa">
                    <h4 data-testid="titleMap">{props.ubicacion}</h4>
                    <iframe data-testid="contentMap"
                        //src = "https://maps.google.com/maps?q=4.6533326+-74.083652&ie=UTF8&iwloc=&output=embed&z=17" 
                        src = {"https://maps.google.com/maps?q="+ props.ubicacion +"&ie=UTF8&iwloc=&output=embed&z=15"}
                        frameborder = "0" 
                        scrolling = "no"> 
                    </iframe>
                </div>
            </StyledMap>
        </>
    );
}
