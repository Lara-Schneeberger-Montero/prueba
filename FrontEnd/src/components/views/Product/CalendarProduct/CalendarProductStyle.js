import styled from "styled-components";

export const StyledCalendarProduct = styled.section`
  color: var(--db-gris-oscuro);
  background-color: #ececef;
    * {
        box-sizing: border-box;
        margin: 0%;
    }

  .container {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .allCalendar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    height: 410px;
    justify-content: baseline; 
  }

    .calendarButton{
      width: 350px;
      margin-top: 150px;
      margin-right: 100px;
      border-radius: 5px;
      padding: 10px;
      gap:10px;
      text-align: center;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 1.2px 1.2px 1.2px 1.2px rgba(0,0,0,0.39);
      
    }

.buscar{
        background:#f0572d;
        color: #ececef;

    }

  /* ------------------------------------------- Mobile ------------------------------------------- */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 18px;
    }

    .container{
      margin-top: 30px;
    }

    .calendarOneMonth{
        display:contents !important ;       
    }

    .calendarTwoMonth{
        display:none !important;
    }

    .backgroundCalendar {
      width: 100%;
      height: 500px;
    }


   .allCalendar {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-around;
      height: 550px;
      justify-content: baseline; 
    }

 /* margin-top: 200PX; */

  .calendarButton {
   width: 80%;
    height: 20%;
    margin-top: 30%;
    margin-left: 10%;
    align-content: flex-start;
  }
/* h1 {
    font-size: 24px;
    font-weight: bold;
    background-color: #ececef;
  } */

  h2 {
    background-color: white;
    width: 100%;
    height: 60px;
  }

  
}

  /* ------------------------------------------- Tablet  ------------------------------------------- */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    
    h1 {
      font-size: 20px;
    }

    .container {
    width: 50%;
    /* margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center; */
  }


  .allCalendar {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    height: 555px;
    /* justify-content: baseline;  */
  }


   .calendarButton {
   width: 100%;
    height: 15%;
    margin-top: 50%;
    margin-left: 40px; 
    align-content: flex-start;
  }

}



  /* ------------------------------------------- Laptop ------------------------------------------- */
  @media screen and (min-width: 769px) and (max-width: 1279px) {


     .container {
    width: 50%;
    /* margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center; */
  }


  .allCalendar {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    height: 555px;
    /* justify-content: baseline;  */
  }


   .calendarButton {
   width: 100%;
    height: 15%;
    margin-top: 80%;
    margin-left: 40px; 
    align-content: flex-start;
  }



    .calendarOneMonth{
        display:none;
    }

    .calendarTwoMonth{
        display:contents ;
    }
  
  }
  `
