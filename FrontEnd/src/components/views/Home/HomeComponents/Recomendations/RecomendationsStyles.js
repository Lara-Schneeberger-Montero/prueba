import styled from "styled-components";

const StyledRecomendations = styled.section`
  width: 100%;
  background-color: var(--db-gris-claro);

  .container {
    margin: 0 30px;
    padding-top: 15px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--db-gris-oscuro);
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    background-color: var(--db-negro);

    h2 {
      color: var(--db-gris-claro);
    }
  }
`;

export { StyledRecomendations };
