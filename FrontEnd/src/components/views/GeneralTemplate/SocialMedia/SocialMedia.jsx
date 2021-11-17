import React from "react";
import { StyledSocialMedia } from "./SocialMediaStyles";

export default function SocialMedia() {
  return (
    <StyledSocialMedia className="socialMedia">
      <a data-testid="header-left" href="https://www.facebook.com/" className="header-left">
        <i data-testid="fab" className="fab fa-facebook-square"></i>
      </a>
      <a data-testid="header-left" href="https://www.linkedin.com/" className="header-left">
        <i data-testid="fab" className="fab fa-linkedin"></i>
      </a>
      <a data-testid="header-left" href="https://twitter.com/" className="header-left">
        <i data-testid="fab" className="fab fa-twitter-square"></i>
      </a>
      <a data-testid="header-left" href="https://www.instagram.com/" className="header-left">
        <i data-testid="fab" className="fab fa-instagram-square"></i>
      </a>
    </StyledSocialMedia>
  );
}
