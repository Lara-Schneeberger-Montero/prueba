import styled from "styled-components";

export const StyledTitleLine = styled.div`
  color: var(--db-gris-oscuro);
  border-bottom: 2px solid var(--db-naranja);
  margin: 30px 0;
  padding: 10px 0;
  h2 {
    width: 95%;
    margin: 10px auto;
    font-size: 24px;
    font-weight: bold;
  }

  /* ------------------------------------------- Mobile ------------------------------------------- */
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 18px;
    }
  }
  /* ------------------------------------------- Tablet ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
  /* ------------------------------------------- Laptop ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
  }
`;
