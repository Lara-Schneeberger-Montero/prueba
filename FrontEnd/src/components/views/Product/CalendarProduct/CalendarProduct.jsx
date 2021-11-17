import React, { useState } from "react";
import { useEffect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledCalendarProduct } from "./CalendarProductStyle";
// import "../../../../Style2/calendarProduct.css";
import { useMediaQuery } from "react-responsive";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalendarProduct.css'
import es from "date-fns/locale/es";


registerLocale("es", es);

export default function CalendarProduct() {
  const { id_producto } = useParams();

  const isMobile = useMediaQuery({ query: 'screen and (max-width: 480px)' })
  // const isTablet = useMediaQuery({ query: 'screen and (min-width: 481px) and (max-width: 768px)' })

  // const [disableDates, setDisableDates] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  // const fechas =["17 Nov 2021", "18 Nov 2021", "19 Nov 2021", "20 Nov 2021"]
  // const beforeToday = DateRangePicker;

  function redimension() {
    if (isMobile) {
      return (
        <>
          <div className="calendarioUnMes">
            <DatePicker
              open
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={(startDate, startDate)}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              locale="es"
              monthsShown={1}
              shouldCloseOnSelect={false}
              onChange={(date) => {
                const [start, end] = date;
                setStartDate(start);
                setEndDate(end);
              }}
            />
          </div>
        </>)
    }
    // } else if (isTablet) {
    //   return (
    //     <>
    //       <div className="calendarioDosMeses">
    //         <DatePicker
    //           open
    //           dateFormat="dd/MM/yyyy"
    //           minDate={new Date()}
    //           selected={(startDate, startDate)}
    //           selectsRange
    //           startDate={startDate}
    //           endDate={endDate}
    //           locale="es"
    //           monthsShown={2}
    //           shouldCloseOnSelect={false}
    //           onChange={(date) => {
    //             const [start, end] = date;
    //             setStartDate(start);
    //             setEndDate(end);
    //           }}
    //         />
    //       </div>
    //     </>)
    // } else {
    else {  
    return (
        <>
          <div className="calendarioDosMeses">
            <DatePicker
              open
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={(startDate, startDate)}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              locale="es"
              monthsShown={2}
              shouldCloseOnSelect={false}
              onChange={(date) => {
                const [start, end] = date;
                setStartDate(start);
                setEndDate(end);
              }}
            />
          </div>
        </>
      )
    }
  }

  return (
    <StyledCalendarProduct data-testid="styleSearch">
      <div className="container">
        {/* <h1>Fechas Disponibles</h1> */}
        <div className="backgroundCalendar">
          {/*  <form data-testid="form-search" action=""> */}
          <div className="allCalendar">
            {redimension('resize')}
            <div className="calendarButton">
              <h2>
                Agrega las fechas para saber la disponiblidad del vehiculo
              </h2>
              <Link to={"/producto/" + id_producto + "/reserva"} className="buscar" type="submit">
                Iniciar reserva
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledCalendarProduct>
  );
}

