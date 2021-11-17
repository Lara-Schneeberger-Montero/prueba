import styled from "styled-components";

const StyledPolicies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 95%;
  margin: auto;

  h2 {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--db-naranja);
  }
  p {
    width: 70%;
    font-size: 1.1em;
    margin: 20px 0;
    line-height: normal;
  }

  /* ------------------------------------------- MOBILE ------------------------------------------- */
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  /* ------------------------------------------- TABLET ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* ------------------------------------------- LAPTOP  ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr) 0.5fr;
  }
`;

export { StyledPolicies };
