import React from "react";
import { StyledBody } from "./GeneralTemplateStyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function GeneralTemplate(props) {
  return (
    <StyledBody>
      <Header />
      {props.children}
      <Footer />
    </StyledBody>
  );
}

export default GeneralTemplate;
