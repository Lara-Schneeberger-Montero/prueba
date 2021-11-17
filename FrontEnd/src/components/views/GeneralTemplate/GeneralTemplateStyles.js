import styled from "styled-components";

const StyledBody = styled.body`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 50px;

  @media screen and (max-width: 480px) {
    padding-bottom: 30px;
  }
  /* ------------------------------------------- TABLET ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
  }
  /* ------------------------------------------- LAPTOP ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-bottom: 50px;
  }
`;

export { StyledBody };
