import styled from "styled-components";

export const StyledHeader = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--db-gris-claro);

  .fa-map-marker-alt {
    color: var(--db-naranja);
    margin-right: 10px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: var(--db-gris-oscuro);
  }
  .container {
    margin: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      background-color: var(--db-negro);
      padding: 5px 10px;
      margin-left: 5px;
      color: #fff;
      border-radius: 10px;
      font-size: 24px;
      font-weight: bold;
    }
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
