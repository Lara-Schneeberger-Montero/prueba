import styled from "styled-components";

const StyledDesktopGallery = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 60vh;

  .ShareLike {
    width: 95%;
    margin: auto;
    .fas {
      color: #000;
      font-size: 2em;
      margin: 10px 10px 10px 0;
      &:hover {
        color: #fff;
        text-shadow: 0 0 5px #000;
      }
    }
  }

  .galleryContainer {
    width: 95%;
    margin: auto;
    flex-grow: 10;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px; //separacion entre grillas (entre si, no contra el borde)

    grid-template-areas:
      "main main secondari secondari"
      "main main secondari secondari";
  }

  .item0 {
    grid-area: main;
  }

  .card {
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
  }

  .item4 {
    display: flex;
    .btnVerMas {
      display: flex;
      flex-grow: 1;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      transition: ease 0.5s;
      p {
        margin: auto;
        background-color: var(--db-naranja);
        font-family: Quicksand;
        font-weight: 500;
        font-size: 3em;
        color: #fff;
        text-shadow: 0 0 5px #000;
        padding: 10px;
        border-radius: 20%;
        transition: ease 0.5s;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        p {
          font-size: 3.5em;
        }
      }
    }
  }

  /* ------------------------------------------- MOBILE ------------------------------------------- */
  @media screen and (max-width: 480px) {
    display: none;
  }

  /* ------------------------------------------- TABLET ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  /* ------------------------------------------- LAPTOP  ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1280px) {
    height: 60vh;
  }
`;

export { StyledDesktopGallery };
