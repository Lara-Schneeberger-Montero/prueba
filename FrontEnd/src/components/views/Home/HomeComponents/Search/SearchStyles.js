import styled from "styled-components";

const StyledSearch = styled.section`
  width: 100%;
  height: 8rem;
  background-color: var(--db-negro);
  color: var(--db-gris-claro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    width: 100%;
  }

  /* .datePicker, */
  select {
    width: 30%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    padding: 0 1rem;
    font-size: 14px;
    font-weight: 500;
    color: var(--db-gris-oscuro);
    font-family: "Quicksand", sans-serif;
  }
  .buscar {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 15%;
    color: #fff;
    border: 1px var(--db-naranja) solid;
    background-color: var(--db-naranja);
    font-weight: bold;
    font-family: "Quicksand", sans-serif;
    height: 2rem;
    border-radius: 5px;
    text-align: center;
    &:hover {
      color: var(--db-naranja);
      border: 1px var(--db-naranja) solid;
      background-color: #fff;
    }
  }
  .buscar p{
    margin: 5%;
  }

  @media (max-width: 480px) {
    height: 30vh;
    padding: 0px 0;
    margin: 0 auto;

    h2 {
      font-size: 36px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 15px;
    }

    form {
      flex-direction: column;
      width: 70%;
    }

    .datePicker,
    select {
      width: 100%;
      margin-top: 0.3rem;
    }
    .buscar {
      width: 100%;
      margin-top: 0.3rem;
      height: 2rem;
      border-radius: 5px;
    }
  }
`;

export { StyledSearch };
