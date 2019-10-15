import React from "react";
import "../../../client/main.css";

import LineChart from "./LineChart";
const student = props => {
  const style = {
    textAlign: "center"
  };

  return (
    <div className="dashboard-background">
      <h1>Estudiantes</h1>
      <div className="card-deck">
        <div className="data-card">
          <h5 id="card-title">Total</h5>
          <p id="card-data">832</p>
        </div>
        <div className="data-card">
          <h5 id="card-title">Doble carrera</h5>
          <p id="card-data">832</p>
        </div>
        <div className="data-card">
          <h5 id="card-title">Prueba académica</h5>
          <p id="card-data">832</p>
        </div>
        <div className="data-card">
          <h5 id="card-title">Intercambio</h5>
          <p id="card-data">832</p>
        </div>
      </div>
      <div className="line-chart">
        <h2>Estudiantes por semestre</h2>
        <LineChart />
      </div>
    </div>
  );
};

export default student;
