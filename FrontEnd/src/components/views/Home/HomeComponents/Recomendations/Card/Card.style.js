import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 49%;
  height: 264px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .card-img {
      height: 100%;
      width: 50%;
      border-radius: 10px 0 0 10px;
      position: relative;
      img {
        height: 264px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
      }
      i{
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 25px;
        color: #fff;
      }
      i:hover{
        cursor: pointer;
        color: var(--db-naranja);
      }
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 100%;
      border-radius: 0 10px 10px 0;
      .card-cabecera {
        margin: 20px 10px;
        display: flex;
        justify-content: space-between;
        .card-categories {
          font-weight: 700;
          font-size: 14px;
          color: #31363f;
        }
        .card-title {
          font-weight: 700;
          font-size: 24px;
          color: #31363f;
        }
        .card-title-points {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-weight: 700;
          h4 {
            width: 40px;
            background-color: #191b1d;
            color: #fff;
            text-align: center;
            margin: -5px 0 0;
            padding: 3px;
            border-radius: 10px;
            font-size: 20px;
          }
          h5 {
            font-size: 14px;
            text-align: right;
          }
        }
      }
      .card-description {
        margin: 0px 10px;
        .card-ubiciacion {
          font-weight: 500;
          font-size: 14px;
          color: #31363f;
        }
        .card-accesorios {
          margin: 5px;
          img {
            margin-right: 5px;
          }
        }
        .card-text {
          font-weight: 500;
          font-size: 14px;
          color: #31363f;
          margin: 30px 0 0;
        }
      }
      button {
        background-color: #f0572d;
        color: #fff;
        border: 1px solid;
        border-radius: 10px;
        padding: 10px;
        font-weight: 700;
        font-size: 14px;
        width: 95%;
        align-self: center;
        margin: 10px;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          color: #f0572d;
          border: 1px solid var(--db-naranja);
        }
      }
    }
  }
  a {
    text-decoration: none !important;
    color: #f0572d !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    height: auto;
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
`;
