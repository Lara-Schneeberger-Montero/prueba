import React from "react";

function InfoBox({ title, arrP }) {
  return (
    <div className="infoBox">
      <h2>{title}</h2>
      {arrP.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
}

export default InfoBox;
