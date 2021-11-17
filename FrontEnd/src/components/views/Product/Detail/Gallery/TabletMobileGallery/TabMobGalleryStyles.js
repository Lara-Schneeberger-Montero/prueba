import styled from "styled-components";

const StyledTabMobGallery = styled.div`
  width: 100%;
  overflow: auto;

  .slidesContainer {
    display: flex;
    flex-wrap: nowrap;
  }

  .slide {
    min-width: 100%;
    display: flex;
    height: 300px;
    position: relative;
    background-size: cover;
    background-position: center center;
    transition: 0.3s ease all;
  }

  .ShareLike {
    position: absolute;
    z-index: 5;
    .fas {
      color: #fff;
      margin: 10px;
      font-size: 1.5em;
      text-shadow: 0 0 5px #000;
    }
  }

  .imgCount {
    flex-grow: 1;
    color: #fff;
    text-shadow: 0 0 5px #000;
    align-self: flex-end;
    text-align: right;
    font-size: 1.3em;
    font-weight: bold;
    margin: 10px;
  }

  /* ------------------------------------------- TABLET ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .slide {
      height: 500px;
    }
  }
  /* ------------------------------------------- LAPTOP ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    display: none;
  }
  /* ------------------------------------------- LAPTOP ------------------------------------------- */
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export { StyledTabMobGallery };
