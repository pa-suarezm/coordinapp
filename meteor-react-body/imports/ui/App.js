import React, { Component } from "react";
import "../../client/main.css";

//Components
import SideNav from "./SideNav"

export default class App extends Component {
  render() {
    return (
        //No hay routing todavía
        <SideNav/>
    );
  }
}
