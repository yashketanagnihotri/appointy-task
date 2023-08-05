import React from "react";
import "./HomePage.css";

function PillComponent({ number, name }) {
  return (
    <div>
      <div className="pillContainer">
        <p className="appointmentTypeName">{number}</p>
        <div className="pitchDetailsContainer">
          <p className="pitchName">{name}</p>
          <p>40 min . Online services</p>
        </div>
      </div>
    </div>
  );
}

export default PillComponent;
