import styled from "styled-components";

export const StyledDescription = styled.section`
  width: 95%;
  margin: 20px auto 0;
  color: var(--db-gris-oscuro);
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.2em;
  }

  /* ------------------------------------------- Mobile ------------------------------------------- */
  @media screen and (max-width: 480px) {
  }
  /* ------------------------------------------- Tablet ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 0.8em;
    padding: 8px 20px;
  }
  /* ------------------------------------------- Laptop ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    font-size: 0.8em;
    padding: 8px 30px;
  }
`;
