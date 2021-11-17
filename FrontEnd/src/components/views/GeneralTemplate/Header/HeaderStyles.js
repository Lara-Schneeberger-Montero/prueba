import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;

  .header_left {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    text-decoration: none;

    img {
      height: 70px;
    }

    p {
      font-family: Quicksand;
      font-size: 25px;
      font-style: normal;
      font-weight: 300;
      line-height: 23px;
      letter-spacing: 0em;
      margin: 0 0 10px 10px;
      color: var(--db-negro);
    }
  }

  .header_right {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    .fa-times {
      align-self: baseline;
      color: var(--db-negro);
      font-size: 1.5rem;
      padding-bottom: 40px;
    }
  }

  .fa-bars {
    display: none;
  }

  #prueba {
    display: none;
  }

  /* ------------------------------------------- MOBILE ------------------------------------------- */
  @media screen and (max-width: 480px) {
    .header_right {
      display: none;
    }
    .fa-bars {
      display: inline-block;
      align-self: center;
      font-size: 1.5em;
    }
    padding: 15px 10px;
    .header_left {
      img {
        height: 40px;
      }
      p {
        display: none;
      }
    }
  }
  /* ------------------------------------------- TABLET ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 10px 30px;
    .header_left {
      img {
        height: 50px;
      }
      p {
        display: none;
      }
    }
  }
  /* ------------------------------------------- LAPTOP ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding: 10px 20px;
    .header_left {
      img {
        height: 60px;
      }
      p {
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
`;
export { StyledHeader };
