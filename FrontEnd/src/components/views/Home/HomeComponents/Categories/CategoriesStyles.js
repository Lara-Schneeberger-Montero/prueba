import styled from "styled-components";

const StyledCategories = styled.section`
  width: 100%;
  .container {
    margin: 20px 30px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--db-gris-oscuro);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  li {
    width: 18em;
    background-color: #fff;
    box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: var(--db-gris-claro);
    }
  }

  li .imagen {
    cursor: pointer;
  }

  li img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  li .contenido {
    margin: 15px;
    line-height: 1.5;
  }

  .contenido h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--db-gris-oscuro);
  }

  .contenido p {
    font-size: 14px;
    font-weight: 700;
    color: grey;
  }

  @media (max-width: 768px) {
    li {
      width: 48%;
    }
  }
  @media (max-width: 480px) {
    height: auto;
    ul {
      justify-content: center;
    }
    li {
      width: 100%;
    }
    .card-container {
      width: 100%;
      flex-direction: column;
      border-radius: 0 0 10px 10px;
      .card-img {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0 0 10px 10px;
        }
      }
      .card-body {
        width: 95%;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    li {
      width: 23%;
    }
  }
`;

export { StyledCategories };
