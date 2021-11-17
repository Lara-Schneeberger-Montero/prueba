import styled from "styled-components";

export const StyledUserRegistrado = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .avatar {
    margin: 5px 15px 5px 0;
    height: 50px;
    width: 50px;
    display: flex;
    background-color: var(--db-naranja);
    border-radius: 50%;
    p {
      margin: auto;
      color: #fff;
      font-family: Quicksand;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0em;
      text-shadow: 0px 0px 5px black;
    }
  }

  .greetings {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0em;
      text-align: left;
      color: var(--db-negro);

      span {
        color: var(--db-naranja);
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    align-content: flex-end;
    margin: 10px;

    .avatar {
      align-self: flex-end;
      background-color: #fff;
      margin: 10px 0;
      p {
        color: black;
        text-shadow: none;
      }
    }
    .greetings {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0em;
        text-align: right;
        color: #fff;

        span {
          color: var(--db-negro);
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .avatar {
      margin: 5px 10px 5px 0;
      height: 40px;
      width: 40px;
      p {
        font-size: 1.3rem;
      }
    }
    .greetings {
      p {
        font-size: 15px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
  }
`;
