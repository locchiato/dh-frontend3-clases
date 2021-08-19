
import React, {Component} from "react";

class Perro extends Component {
  render() {
    return (
      <div>
        <h2>Nombre: {this.props.nombre}</h2>
        <ul>
          {this.props.render("Edad", this.props.edad)}
          {this.props.render("Sexo", this.props.sexo)}
          {this.props.render("Raza", this.props.raza)}
          {this.props.render("Tamaño", this.props.tamaño)}
        </ul>
      </div>
    );
  }
}

export default Perro;