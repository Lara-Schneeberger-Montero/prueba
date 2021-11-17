import styled from "styled-components";

export const StyledHeader = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: var(--db-negro);
    .container{
        margin: 10px 30px;
        h1{
            font-size: 24px;
            font-weight: bold;
            color: #fff;
        }
        h2{
            font-size: 14px;
            font-weight: bold;
            color: #fff;
        }
        i{
            color: #fff;
            font-size: 40px;
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
