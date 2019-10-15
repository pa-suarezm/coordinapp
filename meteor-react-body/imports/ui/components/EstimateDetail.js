import React from "react";
import "../../../client/main.css";

const estimateDetail = props => {
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
      <div className="detail-data-wrap">
        <div className="detail-card detail-1">
          <div id="data">185</div>
          <h5>Estudiantes</h5>
        </div>
        <div className="detail-card detail-2">
          <div id="data">185</div>
          <h5>Secciones</h5>
        </div>
        <div className="detail-card detail-3">
          <div id="data">185</div>
          <h5>Estudiantes/Sección</h5>
        </div>
      </div>
    </div>
  );
};

export default estimateDetail;
