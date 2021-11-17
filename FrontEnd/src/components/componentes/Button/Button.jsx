import React from "react";
import { StyledButton } from "./ButtonStyles";

export default function Button(props) {
  return <StyledButton>{props.text}</StyledButton>;
}
