import styled from "styled-components";

export const StyledFeatures= styled.section`

    .containerFeatures{
      display:flex;
      justify-content: center;
      flex-direction: column;
    }
    .containerEachFeature{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 50%;
      margin: auto;
      margin-top: 8px;
      p{
          width: 70%;
          text-align:left ;
      }
    }


     /* ------------------------------------------- Mobile ------------------------------------------- */
  @media screen and (max-width: 480px) {
  }
  /* ------------------------------------------- Tablet ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {

    .containerFeatures{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    }

    .containerEachFeature{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 50%;
    margin: auto;
    margin-top: 8px;
    
    }
    
  }
  /* ------------------------------------------- Laptop ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {

    .containerFeatures{
    display:flex;
    flex-direction: row;
    flex-wrap: unset;
    justify-content: center;
    margin-left:40px;
    }

    .containerEachFeature{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 50%;
    margin: auto;
    margin-top: 8px;
    
    }

  }

 @media only screen and (min-width: 1200px){

    .containerFeatures{
    display:flex;
    flex-direction: row;
    flex-wrap: unset;
    justify-content: center;
    margin-left:40px;
   
    }

    .containerEachFeature{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 50%;
    margin: auto;
    margin-top: 8px;
    
    }
 }
`;