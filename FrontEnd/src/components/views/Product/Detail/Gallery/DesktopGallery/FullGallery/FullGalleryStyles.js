import styled from "styled-components";

const StyledFullGallery = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: default;

  .container {
    position: relative;
    margin: auto;
    height: 60vh;
    width: 50vw;
    border-radius: 20px;
    background-color: lightgray;
    overflow: hidden;

    .fa-times {
      position: absolute;
      z-index: 5;
      right: 0;
      top: 0;
      font-size: 2em;
      margin: 10px;
      color: #fff;
      text-shadow: 0 0 5px black;
      cursor: pointer;
    }

    .slide {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: opacity ease-in-out 0.5s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .active-anim {
      opacity: 1;
    }

    .btn-slide {
      display: flex;
      position: absolute;
      height: 2em;
      width: 2em;
      background: var(--db-naranja);
      border: none;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: rgba(219, 59, 15, 1);
      }
    }
    .prev,
    .next {
      top: 50%;
      font-size: 1.5em;
      transform: translateY(-60%);
      color: white;
      text-shadow: 0 0 5px black;
    }
    .prev {
      left: 20px;
    }
    .next {
      right: 20px;
    }

    .container-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid #fff;
      margin: 0 5px;
      background: #fff;
    }
    .dot.active {
      background: var(--db-naranja);
    }
  }
`;

export { StyledFullGallery };
