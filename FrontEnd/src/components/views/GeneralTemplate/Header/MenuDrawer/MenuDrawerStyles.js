import styled from "styled-components";

export const StyledMenuDrawer = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0px;
    right: 0;
    width: 100%;

    .transparent {
      width: 25%;
      background-color: #0000007a;
    }

    .visible {
      width: 75%;

      .upperBox {
        background-color: var(--db-naranja);
        height: 30vh;
        display: flex;
        .fa-times {
          font-size: 2em;
          margin: 10px;
        }
        #menu {
          align-self: flex-end;
          flex-grow: 1;
          font-family: Quicksand;
          font-size: 1.5em;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0em;
          text-align: right;
          margin: 10px;
        }
      }

      .lowerBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fff;
        height: 70vh;

        .BotonesMobile {
          text-align: right;
          display: flex;
          flex-direction: column;
          height: 100%;

          hr {
            width: 90%;
            line-height: 0;
          }

          p {
            font-family: Quicksand;
            font-size: 1em;
            font-style: normal;
            font-weight: 700;
            letter-spacing: 0em;
            color: var(--db-negro);
            margin: 20px 10px;
          }

          .closeSession {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-size: 0.9em;

            p {
              margin: 0 10px;
              span {
                color: var(--db-naranja);
              }
            }
            hr {
              width: 90%;
              line-height: 0;
            }
          }
        }
      }
    }
  }
`;
