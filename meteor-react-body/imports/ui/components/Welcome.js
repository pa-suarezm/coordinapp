import React from "react";
import "../../../client/main.css";

const welcome = props => {
  const style = {
    textAlign: "center"
  };

  return (
    <div id="welcome-container">
      <div className="flex-container">
        <h1>¡Te damos la bienvenida!</h1>
        <p style={style}>
          Haz click en alguna de las opciones del menú lateral para ver
          información sobre cursos, estudiantes y estadísticas.
        </p>
      </div>
    </div>
  );
};

export default welcome;
