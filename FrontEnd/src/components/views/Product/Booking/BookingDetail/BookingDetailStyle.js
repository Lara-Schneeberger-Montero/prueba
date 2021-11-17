import styled from "styled-components";

export const StyledDetailBooking = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.2);
  background-color: #fff;
  h2{
    width: 90%;
    font-size: 24px;
    font-weight: bold;
    margin: 10px auto;
  }
  .imagenPrincipal{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
  .description{
    width: 90%;
    margin: 30px auto 10px;
    h5{
        font-size: 14px;
        font-weight: bold;
        color: var(--db-gris-oscuro);
    }
    h4{
        font-size: 24px;
        font-weight: bold;
        color: var(--db-negro);
    }
    .ubicacion{
        font-size: 14px;
        font-weight: bold;
        margin: 10px 0;
    }
    .calificacion img{
        width: 15px;
    }
    .fechas{
        margin: 30px 0;
        border-top: 2px solid var(--db-gris-claro);
        .check{
            display: flex;
            justify-content: space-between;
            padding: 20px 10px;
            border-bottom: 2px solid var(--db-gris-claro);
        }
        
    }
    .boton{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: var(--db-naranja);
        border-radius: 10px;
        cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    .titulo{
        width: 50%;
    }
    .description{
        width: 50%;
        margin-right: 15px;
    }
    h2{
        font-size: 20px;
    }
    .imagenPrincipal{
        width: 90%;
        height: 285px;
        margin-left: 15px;
        border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
    .titulo{
        width: 100%;
    }
    .description{
        width: 90%;
    } 
    .imagenPrincipal{
        width: 100%;
        height: 200px;
        margin: 0;
        border-radius: 0;
    }
  }
`