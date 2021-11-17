/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TitleLine from "../TitleLine/TitleLine";
import { StyledFeatures } from "../Features/FeaturesStyle";
import mark from "../../../../../media/icons/mark.svg";
import logo from "../../../../../media/icons/logo.svg";
import year from "../../../../../media/icons/year.svg";
import fuil from "../../../../../media/icons/fuil.svg";
import door from "../../../../../media/icons/door.svg";
import transmission from "../../../../../media/icons/transmission.svg";
import motor from "../../../../../media/icons/motor.svg";
import air from "../../../../../media/icons/air.svg";

export default function Features(props) {
    return (

        <div>
            <TitleLine title="Caracteristicas del vehiculo" />

            <StyledFeatures>
                <div className="containerFeatures">

                    <div className="containerEachFeature">
                        <img src={mark} />
                        <p>{props.marca}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={logo} />
                        <p>{props.modelo}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={year} />
                        <p>{props.anio}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={fuil} />
                        <p>{props.combustible}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={transmission} />
                        <p>{props.transmision}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={door} />
                        <p>{props.puertas}</p>
                    </div>


                    <div className="containerEachFeature">
                        <img src={motor} />
                        <p>{props.motor}</p>
                    </div>

                    <div className="containerEachFeature">
                        <img src={air} />
                        <p>{props.aire}</p>
                    </div>

                </div>

            </StyledFeatures>
        </div>







    );
}