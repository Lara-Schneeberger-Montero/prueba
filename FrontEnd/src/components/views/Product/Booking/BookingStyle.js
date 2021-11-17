import styled from "styled-components";

export const StyledBooking = styled.div`
    background-color: var(--db-gris-claro);
    display: flex;
    flex-wrap: wrap;
    padding: 15px 30px;
    .left{
        width: 70%;
    }
    .right{
        width: 30%;
    }

  @media (max-width: 768px) {
    padding: 15px;
    .left{
        width: 100%;
    }
    .right{
        width: 100%;
    }
  }
  @media (max-width: 480px) {
    padding: 15px;
    height: auto;
  }
`