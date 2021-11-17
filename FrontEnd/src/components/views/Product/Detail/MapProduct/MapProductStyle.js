import styled from "styled-components";

export const StyledMap = styled.section`
    display: flex;
    margin-bottom: 50px;
    .mapa{
        width: 95%;
        height: 400px;
        margin: auto;
        h4{
            margin-bottom: 20px;
        }
        iframe{
            width: 100%;
            border-radius: 10px;
            height: 400px;
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
