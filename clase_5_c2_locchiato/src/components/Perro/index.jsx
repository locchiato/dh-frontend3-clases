
import React, {Component} from "react";

class Perro extends Component {
  render() {
    return (
      <div>
        <h2>Nombre: {this.props.nombre}</h2>
        <ul>
          <li>Edad: {this.props.edad}</li>
          <li>Sexo: {this.props.sexo}</li>
          <li>Raza: {this.props.raza}</li>
          <li>Tamaño: {this.props.tamaño} </li>
        </ul>
      </div>
    );
  }
}

export default Perro;