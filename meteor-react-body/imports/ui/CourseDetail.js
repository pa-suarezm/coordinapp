import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../client/main.css";

const courseDetail = props => {
  const style = {
    textAlign: "center"
  };
  //Sería chévere poner como "if avg < a tal, entonces el style es tal y así"

  return (
    <div className="course-detail-wrap">
      <h6>Detalles del curso</h6>
      <h2>Algorítmica y Programación de Objetos</h2>
      <h4>ISIS - 1204</h4>
      <h5>3 créditos</h5>
      <div className="wrap-data">
        <div id="data-text">
          <h3>Efectividad</h3>
          <p>
            Métrica que muestra el porcentaje de estudiantes que permanecen en
            el curso después de la semana de retiros.
          </p>
        </div>
        <p id="data">32.7%</p>
      </div>
      <div className="wrap-data">
        <div id="data-text">
          <h3>Nota promedio</h3>
          <p>Promedio ponderado de las calificaciones finales del curso.</p>
        </div>
        <div id="data">3.82</div>
      </div>
    </div>
  );
};

export default courseDetail;
