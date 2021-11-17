import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0px 10px;
  background-color: #fff;
  font-weight: 700;
  border: 1px solid var(--db-naranja);
  border-radius: 0.3rem;
  font-size: 1.2em;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  color: var(--db-naranja);
  height: 50px;
  width: 250px;
  &:hover {
    background-color: var(--db-naranja);
    color: #fff;
  }

  /* ------------------------------------------- Mobile ------------------------------------------- */
  @media screen and (max-width: 480px) {
  }
  /* ------------------------------------------- Tablet ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin: 0px 5px;
    height: 40px;
    width: 150px;
    font-size: 1em;
  }
  /* ------------------------------------------- Laptop ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    margin: 0px 8px;
    font-size: 1em;
    height: 40px;
    width: 180px;
  }
`;
