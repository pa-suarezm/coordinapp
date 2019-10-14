import React from "react";
import "../../../client/main.css";

const sideNav = props => {
  return (
    <div className="sidenav">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7EjGF_qmL4nqmkWPRcXqTGyTZFhteHPpUrALAlPIDWWwIQLn-Q"
        alt="Foto de perfil"
        id="profilePicture"
      />
      <a href="" id="profileName">
        Peppa Pig
      </a>
      <div className="nav-wrap">
        <div className="upper-links">
          <div className="link-wrap">
            <i className="material-icons violet">assignment</i>
            <a href="/Courses">Cursos</a>
          </div>
          <div className="link-wrap">
            <i className="material-icons violet">people</i>
            <a href="/Student">Estudiantes</a>
          </div>
          <div className="link-wrap">
            <i className="material-icons violet">assessment</i>
            <a href="/Estimate">Estimaciones</a>
          </div>
        </div>
        <div className="bottom-links">
          <div className="link-wrap" id="logoff">
            <i className="material-icons violet">exit_to_app</i>
            <a href="/logout">Salir</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideNav;
