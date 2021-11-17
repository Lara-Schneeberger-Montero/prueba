import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--db-naranja);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;

  p {
    color: var(--db-gris-claro);
    font-family: Quicksand;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    margin-left: 20px;
  }

  .socialMedia {
    margin: 5px 20px;
  }

  /* ------------------------------------------- MOBILE ------------------------------------------- */

  @media screen and (max-width: 480px) {
    .socialMedia {
      display: none;
    }

    p {
      margin: 10px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
  }
`;
