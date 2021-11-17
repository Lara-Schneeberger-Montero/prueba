import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { StyledFooter } from "./FooterStyles";

export default function Footer() {
  return (
    <StyledFooter data-testid="styleFooter">
      <p data-testid="texto">©2021 Digital Booking</p>
      <SocialMedia />
    </StyledFooter>
  );
}
