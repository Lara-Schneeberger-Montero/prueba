import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DateRangePicker } from "rsuite";
import { StyledSearch } from "./SearchStyles";
import { useMediaQuery } from "react-responsive";

import Select from "./Select/Select"
import "./calendarSearch.css";
import '../../../../../Styles/calendar.css'

// import { StyleCalendarSearch } from "../../../../../Styles/calendar2";


export default function Search() {
  const [city, setCity] = useState("");
  const [nombre_city, setNombreCity] = useState("");
  
  const handlerCity = (city, nombre) => {
    setCity(city);
    setNombreCity(nombre);
  };

  const isMobile = useMediaQuery({ query: "screen and (max-width: 480px)" });
  // const isTablet = useMediaQuery({
  //   query: "screen and (min-width: 481px) and (max-width: 768px)",
  // });

  function redimension() {
    if (isMobile) {
      return (
        <div className="calendarOneMonth">
          <div>
            <DateRangePicker
            
              showOneCalendar
              // aparece un solo calendario
              // open  //calendario estatico
              placeholder="Check in - Check out"
            />
          </div>
        </div>
      );
    } else{
      return (
        <div className="calendarTwoMonth">
          <DateRangePicker
          
            showTwoCalendar
            // open  //calendario estatico
            placeholder="Check in - Check out"
          />
        </div>
      );
    }
    // } else {
    //   return (
    //     <div className="calendarTwoMonth">
    //       <DateRangePicker
            
    //         showTwoCalendar
    //         // readOnly={true}
    //         // open   //calendario estatico
    //         placeholder="Check in - Check out"
    //       />
    //     </div>
    //   );
    // }
  }

  return (
    <StyledSearch data-testid="styleSearch">
      <h2>Encuentra un vehículo</h2>
      <form data-testid="form-search">
        <Select cityChange={handlerCity}/>
        {redimension('resize')}
        {!nombre_city ? (
          <Link to={"/#"} className="buscar" type="submit">
            <p>Buscar</p>
          </Link>
        ) : (
          <Link to={"/filtro/" + nombre_city + "/" + city} className="buscar" type="submit">
            <p>Buscar</p>
          </Link>
        )}
      </form>
    </StyledSearch>
  );
}
