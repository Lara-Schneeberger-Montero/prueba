import React from "react";
import { StyledTitleLine } from "./TitleLineStyle";

export default function TitleLine(props) {
    return (
        <StyledTitleLine>
            <div className="title-line">
                <h2>{props.title}</h2>
                <h2>{props.mark}</h2>
            </div>
        </StyledTitleLine>
    );
}